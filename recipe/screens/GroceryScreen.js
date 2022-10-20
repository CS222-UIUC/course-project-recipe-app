
import { menuBar} from "./menubar.js";
import {Text, View } from 'react-native';
import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
const GroceryScreen = ({ navigation }) => {
    return (
      <View >
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