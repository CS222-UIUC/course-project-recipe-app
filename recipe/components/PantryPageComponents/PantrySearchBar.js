import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import react, {useState} from "react";
import {styles} from "../StyleSheet.js";

const PantrySearchBar = (props) => {
    const [text, onChangeText] = React.useState("");

    return(
        <View style={styles.containerSearch}>
            <TextInput
                placeholder='Enter'
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                onSubmitEditing={() => {
                    fetch('http://192.168.1.93:3001/pantry', {
                        method: 'POST',
                        headers: {"Conent-Type": "application/json"},
                        body: text
                    })
                    .catch(error => { console.log(error) })
                    
                    onChangeText('');
                }}
                
            />
        </View>
    )
}
export default PantrySearchBar;


