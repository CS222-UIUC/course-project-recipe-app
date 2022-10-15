
import { menuBar} from "./screens/menubar.js";
import {  Text, View } from 'react-native';
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