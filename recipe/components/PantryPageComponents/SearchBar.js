import {View, Text, TextInput} from "react-native";
import react, {useState} from "react";
import {styles} from "../StyleSheet.js";

const SearchBar = (props)=> {
    return(
        <View style={styles.containerSearch}>
            <TextInput
                placeholder='Enter'
                style={styles.input}
                value = {props.searchText}
                onChangeText = {(text) => props.setSearchText}
            />
        </View>
    )
}
export default SearchBar;


