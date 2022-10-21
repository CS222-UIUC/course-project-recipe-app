
import { menuBar} from "./menubar.js";
import {StyleSheet,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
const GroceryScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <PantryAndGroceryButton>Add</PantryAndGroceryButton>
        <PantryAndGroceryButton>Edit</PantryAndGroceryButton>
        <PantryAndGroceryButton>Share</PantryAndGroceryButton>
        <PantryAndGroceryButton>Export</PantryAndGroceryButton>
        {menuBar(navigation)}
        <Text>Grocery</Text>
      </View>
    );
  };
  
  export {GroceryScreen};