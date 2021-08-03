//_takepicture has docs stating options run this in a const over const. const _takepicture = async() => { const option =}

import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Camera } from 'expo-camera';
import {Feather as Icon, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ImagePickerExample from "../../components/ImagePicker";
import styles from './styles';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


const whiteBalProps = [
    {id: "auto", property: "Auto"},
    {id: "sunny", property: "Sunny"},
    {id: "cloudy", property: "Cloudy"},
    {id: "shadow", property: "Shadow"},
    {id: "fluorescent", property: "Fluorescent"},
    {id: "incandescent", property: "Incandescent"},
];

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setflashMode] = useState(Camera.Constants.FlashMode.off);
    const [autoFocus, setautoFocus] = useState(Camera.Constants.AutoFocus.auto);
    const [whBalance, setWhBalance] = useState(
        Camera.Constants.WhiteBalance.auto
    );
    const camera = useRef<Camera | null>();

    const __takePicture = async () => {
        if (camera.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            let photo = await camera.current.takePictureAsync(options);
            console.log(camera.current.getSupportedRatiosAsync());
            const source = photo.uri;


            if (source) {
                handleSave(source);
            }
        }
    };

  /*  const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)*/




    const __takeVideo = async () => {
        if (camera.current) {
            const options = { quality: 0.5, maxDuration: 120, };
            let photo = await camera.current.takePictureAsync(options);
            console.log(camera.current.getSupportedRatiosAsync());
            const source = photo.uri;


            if (source) {
                handleSave(source);
            }
        }
    };

    const handleSave = async (photo: string) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === "granted") {
            const assert = await MediaLibrary.createAssetAsync(photo);
            await MediaLibrary.createAlbumAsync("Loop", assert);
        } else {
            console.log("oh You missed permission");
        }
    };



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    const _toggleFlash = () => {
        setflashMode(
            flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
        )
    };
    const _handleWhiteBalance = (value: string) => {
        const setVal = `Camera.Constants.WhiteBalance.${value}`;
        setWhBalance(setVal);
    };

  return (
      <View style={styles.container}>
          {/*<CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />*/}
        <Camera style={styles.camera}
                type={type}
                whiteBalance={whBalance}
                flashMode={flashMode}
                ref={camera}
                autoFocus={autoFocus}>

          <View style={styles.buttonContainer}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                      type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                  );
                }}>
              <MaterialIcons name="flip-camera-ios" size={24} color="white" />

            </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => _toggleFlash()}>
                  <Ionicons
                      name={flashMode === Camera.Constants.FlashMode.torch
                          ? "flash-sharp"
                          : "flash-off"
                      }
                      size={20}
                      color="white"/>

              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                      setautoFocus(
                          autoFocus === Camera.Constants.AutoFocus.auto
                              ? Camera.Constants.AutoFocus.on
                              : Camera.Constants.AutoFocus.off
                      );
                  }}>
                  <MaterialIcons name="face" size={24} color="white" />

              </TouchableOpacity>


          </View>








             {/* <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                      setwhiteBalance(
                          whiteBalance === Camera.Constants.WhiteBalance.sunny
                              ? Camera.Constants.WhiteBalance.off
                              : Camera.Constants.WhiteBalance.sunny
                      );
                  }}>
                  <Ionicons name="flash" size={24} color="white" />

              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                      setwhiteBalance(
                          whiteBalance === Camera.Constants.WhiteBalance.shadow
                              ? Camera.Constants.WhiteBalance.off
                              : Camera.Constants.WhiteBalance.shadow
                      );
                  }}>
                  <Ionicons name="flash" size={24} color="white" />

              </TouchableOpacity>
*/}


            <View style={styles.bottomContainer}>
                <ScrollView horizontal={true}>
                    {whiteBalProps.map((item, _) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => _handleWhiteBalance(item.id)}>
                                <View style={{padding:5}}>
                                    <Text style={{color: 'white', fontSize:  '25'}}>{item.property}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={styles.photoContainer}>

                <ImagePickerExample/>
                    <TouchableOpacity style={{alignSelf: 'center', alignItems: 'center', }}  onPress={()=> __takePicture()}>
                        <Icon name={"aperture"} size={50} color="white" />
                    </TouchableOpacity>
                </View>





                    <View>


            </View>







                <View style={{position: "absolute", alignItems: 'center', justifyContent: 'center', bottom: 60, alignSelf: 'center'}}>
              </View>

        </View>
        </Camera>
      </View>
  );
}



