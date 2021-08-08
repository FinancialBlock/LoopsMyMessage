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
import {PostImage} from "../../src/API";
const Tab = createMaterialTopTabNavigator();

export type UserProfilePostProps = {
    postimage: PostImage;

}
const UserProfilePhotos = (props: UserProfilePostProps) => {
    const [postimage, setPostimage] = useState(props.postimage);
    const [isLiked, setIsLiked] = useState(false);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPostimage({
            ...postimage,
            likes: postimage.likes + likesToAdd,
            /*likes: post.likes + likesToAdd,*/
        });
        setIsLiked(!isLiked);
    };
    return (

    <View >
        <View style={styles.container}>


        </View>
    </View>
    )
}

export default UserProfilePhotos;
