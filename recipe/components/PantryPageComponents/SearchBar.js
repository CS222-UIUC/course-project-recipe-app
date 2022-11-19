import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import react, {useState} from "react";
import {styles} from "../StyleSheet.js";

const SearchBar = (props) => {
    const [text, onChangeText] = React.useState("");

    return(
        <View style={styles.containerSearch}>
            <TextInput
                placeholder='Enter'
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                onSubmitEditing={() => {
                    const url1 = 'http://192.168.1.93:3001/pantry';
                    const url2 = 'http://10.195.152.133:3001/pantry';
                    fetch(url1, {
                        method: 'POST',
                        headers: {"Conent-Type": "application/json"},
                        body: text
                    })
                }}
                
            />
        </View>
    )
}
export default SearchBar;


