import React from 'react';
import {FlatList, StyleSheet, ImageBackground} from 'react-native';

import { Text, View } from '../components/Themed';

import ChatMessage from "../components/ChatMessage";

import {useRoute} from '@react-navigation/native';

import BG from "../assets/images/e389da140761adaf25277d885e13b205.jpeg";

import Chats from "../data/Chats";

import chatRoomScreen from '../data/ChatRoom';
import Animated from "react-native-reanimated";
import InputBox from "../components/InputBox";

const ChatRoomScreens = () => {

    const route = useRoute();

    //console.log(route.params);

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
        <FlatList data={Chats.messages}
                  renderItem={({item}) => <ChatMessage message={item}/>} inverted />
            <InputBox/>

        </ImageBackground>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
});

export default ChatRoomScreens;
