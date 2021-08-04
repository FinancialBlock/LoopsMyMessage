import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {Feather as Icon} from "@expo/vector-icons";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const cam =useRef().current;

    const takePicture = async () => {
        const options = {quality: 0.5, base64: true, skipProcessing: false};

        const picture = await cam.takePictureAsync(options);

        if (picture.source) {
            console.log(picture.source)
        }
    }


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    // Shows status await the camera to give permission to use users camera set permission status as granted

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>



            </View>
            <Camera style={styles.camera} type={type} ref={cam}>

                <View >
                <View style={{ position: 'absolute'}}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center', position:'absolute'}} onPress={() => _takePicture}>

                        <Icon name={"aperture"} size={50} color="red" />


                    </TouchableOpacity>
                </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 130,
                                borderRadius: 4,
                                backgroundColor: '#14274e',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                Take picture
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center', position:'absolute'}} onPress={() => _takePicture}>

                            <Icon name={"aperture"} size={50} color="red" />


                        </TouchableOpacity>

                    </View>

                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
});

