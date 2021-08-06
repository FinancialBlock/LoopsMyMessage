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



export type UserProfileFeedProps = {
    user: User;
    post: Post;

}
const UserProfileFeed = (props: UserProfileFeedProps) => {
    const [user, Post] = useState(props)



    return (
        <View>
            <ScrollView>

           <Text style={styles.headerText}> Post </Text>

            <ScrollView  horizontal={true} >
                <View style={styles.postIcons}>
                    <Image style={styles.postIcons} source={{uri: user.post.imageUri}}/>
                    <AntDesign name="heart" size={24} color="blue" />
                    <Image style={styles.postIcons} source={{uri: user.post.videoUri}}/>
                    <Image style={styles.postIcons} source={{uri: user.user.posts}}/>
                    <Image style={styles.postIcons} source={{uri: user.user.posts}}/>

                </View>
            </ScrollView>

            <TouchableOpacity>
            <Text style={styles.showAll}> Show All </Text>
            </TouchableOpacity>
                <Text style={styles.headerText}> Sounds </Text>

                <Text style={styles.headerText}> Timeline </Text>



            </ScrollView>


        </View>
    )
}

export default UserProfileFeed;
