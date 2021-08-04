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
    const post = props;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        <View>
            <View style={styles.container}>




                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: post.post.video }}
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
                    <Image source={{ uri: post.post.user.imageUri }}
                           style={styles.profilePicture} />
                    <View>
                        <Text style={styles.name}>
                            {post.post.user.username}
                        </Text>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10, color: 'white'}} > {post.post.description} </Text>
                            <View>

                            </View>

                        </View>
                    </View>
                </View>


                <View style={styles.bottomContainer}>

                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name={'heart'} size={40} />
                        <Text style={styles.statsLabel}>{post.post.likes}</Text>
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <FontAwesome name={'commenting'} size={40} color="white" />
                        <Text style={styles.statsLabel}>{post.post.comments}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <MaterialIcons name={'attach-money'} size={40} color="white" />
                        <Text style={styles.statsLabel}>{post.post.tips}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name={'share-a'} size={35} color="white" />
                        <Text style={styles.statsLabel}>{post.post.shares}</Text>
                    </View>
                </View>





            </View>
        </View>


    )
};

export default PostView;
