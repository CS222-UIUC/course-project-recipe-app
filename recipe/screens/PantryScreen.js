import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
const PantryScreen = ({ navigation }) => {
    return (
      <View >
        <PantryAndGroceryButton>Input</PantryAndGroceryButton>
        <PantryAndGroceryButton>Edit</PantryAndGroceryButton>
        {menuBar(navigation)}
        <Text>Pantry</Text>
      </View>
    );
  };
  
  export {PantryScreen};