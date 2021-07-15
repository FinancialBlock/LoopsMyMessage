import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';



import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItems from "../components/ContactListItems";



export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <FlatList data={users} renderItem={({item}) => <ContactListItems user={item} />}
                      keyExtractor={(item) => item.id}

            />

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
});

