import React, {useState} from "react";
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from "react-native";
import styles from "./styles";
import {Post, ProfileType, User} from "../../types";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChatRoom} from "../../types";
import FleetProfile from "../FleetProfile";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Video} from "expo-av";
import {FontAwesome, Fontisto} from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();

export type UserProfilePostProps = {
    post: Post;

}
const UserProfilePost = (props: UserProfilePostProps) => {
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
            /*likes: post.likes + likesToAdd,*/
        });
        setIsLiked(!isLiked);
    };
    return (

    <View >
        <View style={styles.container}>

            <Video
                ref={video}
                style={styles.video}
                source={{ uri: props.post.videoUri }}
                useNativeControls
                resizeMode= "cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity style={styles.videopause} onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}/>

            <Text style={styles.bottomContainer}>{props.post.description}</Text>
            <View>

                <TouchableOpacity style={{ width: 30, height: 30 }} onPress={onLikePress}>
                    <AntDesign name={'heart'} size={30}  color={isLiked ? 'red' : 'white'} />

                </TouchableOpacity>
            </View>









        </View>
    </View>
    )
}

export default UserProfilePost;
