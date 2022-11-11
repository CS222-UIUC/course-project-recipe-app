import { menuBar} from "./menubar.js";
import {  TextInput, Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import React from 'react';



const PantryScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  
    return (
      <View style={styles.container}>
        
        <PantryAndGroceryButton>Input</PantryAndGroceryButton>
        <PantryAndGroceryButton>Edit</PantryAndGroceryButton>
        {menuBar(navigation)}
        <Text>Pantry</Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="alphabetic"
          returnKeyType='My Custom button'
          onSubmitEditing={console.log("WOAH")}
        />
      </View>
    );
  };
  
  export {PantryScreen};