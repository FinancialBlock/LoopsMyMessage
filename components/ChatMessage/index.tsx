import React from "react";
import {ChatListItemProps} from "../ChatListItems";
import { Text }  from 'react-native';
import {Message} from "../../types";
import {View} from "../Themed";
import moment from "moment";
import styles from "./style";
import {StyleSheet} from "react-native";

export type ChatMessageProps = {
    message: Message;
    myId: String,
}




const ChatMessage = (props: ChatMessageProps) => {
    const { message, myId } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#add8e6' : '#d9d4d4',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;
