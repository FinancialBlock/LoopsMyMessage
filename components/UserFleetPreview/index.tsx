import React from "react";
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {User} from "../../types";
import styles from "./styles"

export type UserProfileProps = {
    user: User;
}

const UserFleetPreview = (props: UserProfileProps) => {
    const {user: {name, username, imageUri}} = props;

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUri }}/>
            <Text style={styles.username}> {username} </Text>

        </View>
    )
}


export default UserFleetPreview;
