import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
const PantryScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <PantryAndGroceryButton>Input</PantryAndGroceryButton>
        <PantryAndGroceryButton>Edit</PantryAndGroceryButton>
        {menuBar(navigation)}
        <Text>Pantry</Text>
      </View>
    );
  };
  
  export {PantryScreen};