import React from "react";
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from "react-native";
import styles from "./styles";
import {ProfileType, User} from "../../types";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChatRoom} from "../../types";
import FleetProfile from "../FleetProfile";
import EditProfileButton from "../EditProfileButton";


export type UserProfileProps = {
    user: User;

}
const UserProfile = (props:UserProfileProps) => {
    const {user: {
        name,
        imageUri,
        username,
        description,
        followers,
        following,
        loops,
        post}}
        = props;



    return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                {/*<Image style={styles.background} source={{ uri: imageUri }} />*/}


                    <View style={styles.titleBar}>
                        <Entypo name="arrow-with-circle-left" size={24} color="#52575D" />
                        <EditProfileButton/>
                    </View>
         {/*   <View>
                <Image style={styles.background} source={{ uri: imageUri }} />
            </View>*/}
            </View>


            <View style={{alignSelf: 'center'}}>
                <View>
                    <Image style={styles.profileImage} source={{ uri: imageUri }} />
                </View>
                <View style={styles.dm}>
                    <TouchableOpacity>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"  />
                    </TouchableOpacity>
                </View>
                <View style={styles.active} />
                <TouchableOpacity>
                    <View style={styles.add}>
                        <AntDesign
                            name="pluscircle"
                            size={30}
                            color="#185ADB"
                            style={{marginTop: 30, marginLeft: 30}}
                        />
                    </View>
                </TouchableOpacity>
            </View>



            <View style={styles.infoContainer}>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 36}]}>
                    @{username}
                </Text>
                <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
                    {description}
                </Text>
            </View>

            <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                    <Text style={styles.userBtnTxt}>Subscribe</Text>
                </TouchableOpacity>
            </View>
            {/*<View style={styles.infoContainer}>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 36}]}>
                    @{name}
                </Text>
                <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
                    hello world this is a description
                </Text>
            </View>*/}

            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>{post}</Text>
                    <Text style={[styles.text, styles.subText]}>Posts</Text>
                </View>
                <View
                    style={[
                        styles.statsBox,
                        {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
                    ]}>
                    <Text style={[styles.text, {fontSize: 24}]}>{followers}</Text>
                    <Text style={[styles.text, styles.subText]}>Followers</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>{following}</Text>
                    <Text style={[styles.text, styles.subText]}>Following</Text>
                </View>
                <View
                    style={[
                        styles.statsBox,
                        {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
                    ]}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 24}]}>{loops}</Text>
                        <Text style={[styles.text, styles.subText]}>Loops</Text>
                        <MaterialCommunityIcons
                            style={styles.iconloop}
                            name={'infinity'}
                        />
                    </View>
                </View>
            </View>

        </ScrollView>
        </View>
)
}

export default UserProfile;
