import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (

        <View >
            <FontAwesome5 name="photo-video" size={24} color="white" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: "cover" }} />}
        </View>

        );
}
