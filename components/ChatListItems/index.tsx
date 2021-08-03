// This list the Message displays other users of the chats and chatrooms. Userslast message String, Content created at

import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity, TouchableHighlight,
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {
    Auth,
    graphqlOperation,
    API
} from 'aws-amplify';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const [ otherUser, setOtherUser] = useState(null);

    const navigation = useNavigation();


    useEffect(() => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
                (chatRoom)
            } else {
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
    }, [])

    const onClick = () => {
        navigation.navigate('Messages', {
            id: chatRoom.id,
            name: otherUser.name,
        })
    }

    if (!otherUser) {
        return null;
    }

    const onPress = () => {
        navigation.navigate('UpdatedProfile', {
            id: chatRoom.id,
            name: otherUser.name,
        })
    }
    if (!otherUser) {
        return null;
    }



    return (
        <TouchableHighlight underlayColor="#add8e6" onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{otherUser.name}</Text>
                        <Text
                            numberOfLines={2}
                            style={styles.lastMessage}>
                            {chatRoom.lastMessage
                                ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
                                : ""}
                        </Text>
                    </View>

                </View>

                <Text style={styles.time}>
                    {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
            </View>
        </TouchableHighlight>
    )
};

export default ChatListItem;
