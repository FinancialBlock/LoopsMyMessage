import React from "react";
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import styles from "./styles";
import {User} from "../../types";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChatRoom} from "../../types";


export type UserProfileProps = {
    user: User;
}
const UserProfile = (props:UserProfileProps) => {
    const {user: {name}} = props;



    return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
            <Entypo name="arrow-with-circle-left" size={24} color="#52575D" />
            <Entypo name="dots-three-horizontal" size={24} color="#52575D" />
        </View>


            <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImage}>
                    <ImageBackground
                        style={styles.profileImage}
                        source={{
                            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                        }}
                    />
                </View>
                <View style={styles.dm}>
                    <TouchableOpacity>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8" />
                    </TouchableOpacity>
                </View>
                <View style={styles.active} />
                <TouchableOpacity>
                    <View style={styles.add}>
                        <AntDesign
                            name="pluscircle"
                            size={48}
                            color="#185ADB"
                            style={{marginTop: 6, marginLeft: 2}}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 36}]}>
                    @{name}
                </Text>
                <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
                    I love to take photos and learn movies
                </Text>
            </View>

            <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                    <Text style={styles.userBtnTxt}>Subscribe</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>483</Text>
                    <Text style={[styles.text, styles.subText]}>Posts</Text>
                </View>
                <View
                    style={[
                        styles.statsBox,
                        {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
                    ]}>
                    <Text style={[styles.text, {fontSize: 24}]}>45,844</Text>
                    <Text style={[styles.text, styles.subText]}>Followers</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>302</Text>
                    <Text style={[styles.text, styles.subText]}>Following</Text>
                </View>
                <View
                    style={[
                        styles.statsBox,
                        {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
                    ]}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 24}]}>6,000</Text>
                        <Text style={[styles.text, styles.subText]}>Loops</Text>
                        <MaterialCommunityIcons
                            style={styles.iconloop}
                            name={'infinity'}
                        />
                    </View>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
)
}

export default UserProfile;
