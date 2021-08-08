import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Button,} from "react-native";
import styles from './styles';
import { Video, AVPlaybackStatus } from 'expo-av';
import FleetProfile from "../FleetProfile";
import moment from "moment";
import posts from "../../data/posts";

/*import {
    API,
    Auth,
    graphqlOperation,
} from 'aws-amplify';

import {
    createMessage,
    updateChatRoom,
} from '../../src/graphql/mutations';

import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
} from '@expo/vector-icons';*/
import {FleetType, Post, User} from "../../types";
import {AntDesign, FontAwesome, Fontisto, MaterialIcons} from "@expo/vector-icons";

export type PostProps = {
    post: Post;
}

const PostView = (props: PostProps) => {
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    console.log(post);
    console.log(isLiked);
    console.log(video)

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
            /*likes: post.likes + likesToAdd,*/
        });
        setIsLiked(!isLiked);
    };

    return(
        <View>
            <View style={styles.container}>




                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: post.videoUri }}
                    useNativeControls
                    resizeMode="cover"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />





                <TouchableOpacity style={styles.videopause} onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}/>
                {/*  <View  >

                                                <Button style={styles.videopause}
                                                        title={status.isPlaying ? 'Pause' : 'Play'}
                                                        onPress={() =>
                                                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                                                        }
                                                />
                                            </View>*/}




                <View style={styles.userHeaderContainer}>
                    <Image source={{ uri: post.user.imageUri}}
                           style={styles.profilePicture} />
                    <View>
                        <Text style={styles.name}>
                            {post.user.username}
                        </Text>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10, color: 'white'}} > {post.description} </Text>
                            <View>

                            </View>

                        </View>
                    </View>
                </View>


                <View style={styles.bottomContainer}>

                    <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                        <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                        <Text style={styles.statsLabel}>{post.likes}</Text>
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <FontAwesome name={'commenting'} size={40} color="white" />
                        <Text style={styles.statsLabel}>{post.comments}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <MaterialIcons name={'attach-money'} size={40} color="white" />
                        <Text style={styles.statsLabel}>{post.tips}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name={'share-a'} size={35} color="white" />
                        <Text style={styles.statsLabel}>{post.shares}</Text>
                    </View>
                </View>





            </View>
        </View>


    )
};

export default PostView;
