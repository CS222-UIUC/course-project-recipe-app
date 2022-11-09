import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import InputButton from "../components/PantryPageComponents/InputButton.js";
import PantryEditButton from "../components/PantryPageComponents/PantryEditButton.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
const PantryScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
        <InputButton></InputButton>
        <View style={styles.space} />
        <PantryEditButton></PantryEditButton>
        <View style={styles.space} />
        <ScanButton></ScanButton>
        </View>
        {menuBar(navigation)}
      </View>
    );
  };
  
  export {PantryScreen};