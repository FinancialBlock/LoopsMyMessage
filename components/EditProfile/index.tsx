import React, {Component, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from "./styles"
import {MaterialCommunityIcons} from "@expo/vector-icons";



export default function UselessTextInput() {
    const [user, setUser] = useState();
    const [updateName, onChange] = React.useState('Name');
    const [updateUsername, onChangeUser] = React.useState('Username');
    const [updateBio, onChangeTextBio] = React.useState('Give us a nice profile description');
    const [updateStatus, onChangeTextStatus] = React.useState('Place a new Status');


    return (
    <View>
        <Image style={styles.editimage} source={ {uri: 'http://www.cinelinx.com/wp-content/uploads/2021/02/Black-Clover.jpg'}}/>
        {/*<View style={styles.rowContainer}>
            <Text style={styles.text}> Name </Text>
            <TextInput
                style={{ height: 40}}
                onChangeText={text => onChangeText(text)}
                value={updateName}
            />
        </View>
        <View style={styles.rowContainer}>
            <Text style={styles.text}> Username </Text>
            <TextInput
                style={{ height: 40 }}
                onChangeTextUsername={text => onChangeText(text)}
                defaultValue={'Name'}
                value={updateUsername}
            />
        </View>
        <View style={styles.rowContainer}>
            <Text style={styles.text}> Bio </Text>
            <TextInput
                style={{ height: 40,}}
                onChangeTextBio={text => onChangeText(text)}
                defaultValue={'Name'}
                value={updateBio}
            />
        </View>*/}
        <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>

                <Text style={styles.text}> Name </Text>
                <Text style={styles.text}> Username </Text>
                <Text style={styles.text}> Bio </Text>
                <Text style={styles.text}> Status </Text>

            </View>
            <View style={styles.leftContainer}>

                <TextInput
                    style={styles.editContainer}
                    onChangeText={text => onChange(text)}
                    defaultValue={'Name'}
                    value={updateName}
                />
                <TextInput
                    style={styles.editContainer}
                    onChangeText={text => onChangeUser(text)}
                    value={updateUsername}
                />
                <TextInput
                    style={styles.editContainer}
                    onChangeText={text => onChangeTextBio(text)}
                    value={updateBio}
                />
                <TextInput
                    style={styles.editContainer}
                    onChangeText={text => onChangeTextStatus(text)}
                    value={updateStatus}
                />
            </View>
        </View>





    </View>
    );
};



/*const onPress = () => {
    navigation.navigate('Contacts');
}

return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons
                name="message-reply-text"
                size={28}
                color="white"
            />
        </TouchableOpacity>
    </View>
)
}*/
