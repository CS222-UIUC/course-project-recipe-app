
import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function ScanButton({ children, color, onPress, navigation }) {

    takeImage = async () => {
    // launch the camera with the following settings
        let image = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true,
        })
        // make sure a image was taken:
        if (!image.canceled) {
            fetch('http://192.168.0.167:3001/scan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // send our base64 string as POST request
                body: JSON.stringify({
                    imgsource: image.base64,
                }),
            })
        }
        navigation.navigate('Home')
    }
    
    return (
    <View style={styles.roundButton}>
        <Pressable onPress={takeImage}>
            <View>
                <Text>Scan</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default ScanButton;