
import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


const EditProfileButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ProfileSettings');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Entypo
                    name="dots-three-horizontal"
                    size={28}
                    color="white"
                    backgroundColor= "transparent"
                />
            </TouchableOpacity>
        </View>
    )
}

export default EditProfileButton;
