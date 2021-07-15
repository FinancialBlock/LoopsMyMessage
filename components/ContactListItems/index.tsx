import React, {useState} from "react";
import {ChatRoom, User} from "../../types";
import {View, Text, Image, SafeAreaView,TouchableWithoutFeedback, ScrollView} from "react-native";
import styles from "./style";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";

export type ContactListItemsProps = {
    user: User;
}

const ContactListItems = (props: ContactListItemsProps) => {
    const { user } = props;
    console.log(props);

    const navigation = useNavigation();

    const onClick = () => {
        //navigation.navigate('Messages', {id: chatRoom.id, name:user.name})
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                    <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{user.name}</Text>
                            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                        </View>

                     </View>
            </View>
        </TouchableWithoutFeedback>
    )
};



export default ContactListItems;
