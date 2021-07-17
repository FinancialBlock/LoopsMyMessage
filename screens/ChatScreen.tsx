import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from "../components/ChatListItems";
import {
    API,
    graphqlOperation,
    Auth,
} from 'aws-amplify';

import chatRooms from '../data/ChatRooms';
import NewMessageButton from "../components/NewMessageButton";
import {useEffect, useState} from "react";

import { getUser } from './queries';
import UserFleetPreview from "../components/UserFleetPreview";

export default function ChatsScreen() {

    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();

                const userData = await API.graphql(
                    graphqlOperation(
                        getUser, {
                            id: userInfo.attributes.sub,
                        }
                    )
                )

                setChatRooms(userData.data.getUser.chatRoomUser.items)
                console.log(userData);

            } catch (e) {
                console.log(e);
            }
        }
        fetchChatRooms();
    }, []);

    return (
        <View style={styles.container}>
            <UserFleetPreview user={{id: '1', name:'blockchain', username:'blockchainbt', imageUri: 'https://i1.sndcdn.com/avatars-CkLqCmTeMPSVzN50-GiKLzA-t500x500.jpg'}}/>
            <FlatList
                style={{width: '100%'}}
                data={chatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
                keyExtractor={(item) => item.id}
            />
            <NewMessageButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
