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

const Tab = createMaterialTopTabNavigator();




export type UserProfilePostProps = {
    post: Post;

}
const UserProfilePost = (props: UserProfilePostProps) => {
    const [post] = useState(props)
    return (
        <View>
            <ScrollView>

                <Text style={styles.headerText}> Post </Text>

                <ScrollView  horizontal={true} >
                    <View style={styles.postIcons}>
                        <Image style={styles.postIcons} source={{uri: post.post.user}}/>
                        <AntDesign style={styles.heartIcon} name="heart" size={24} color="red" />



                    </View>
                </ScrollView>



            </ScrollView>


        </View>
    )
}

export default UserProfilePost;
