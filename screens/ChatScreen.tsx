import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItems";


import chatRooms from '../data/ChatRoom';
import NewMessageButton from "../components/NewMessageButton";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={chatRooms} renderItem={({item}) => <ChatListItem chatRoom={item} />}
      keyExtractor={(item) => item.id}

      />
        <NewMessageButton/>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
});
