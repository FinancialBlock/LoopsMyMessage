import React from "react";
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {User} from "../../types";
import styles from "./styles"
import {useNavigation} from '@react-navigation/native';

export type UserFleetPreviewProps = {
    user: User;
}

const UserFleetPreview = (props: UserFleetPreviewProps) => {
    const {user: {id, username, imageUri}} = props;

    const navigation = useNavigation();

    const onPress = () => {
        //navigate to fleet screen on press
        navigation.navigate('Storys',{userId: id});

}




    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUri }}/>
            <Text style={styles.username}> {username} </Text>

        </View>
      </TouchableOpacity>
    )
}


export default UserFleetPreview;
