
import { menuBar} from "./menubar.js";
import {ScrollView, StyleSheet,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import AddButton from "../components/GroceryPageComponents/AddButton.js";
import EditButton from "../components/GroceryPageComponents/EditButton.js";
import ShareButton from "../components/GroceryPageComponents/ShareButton.js";
import ExportButton from "../components/GroceryPageComponents/ExportButton.js";
import Scroller from "../components/ScrollView.js";
const GroceryScreen = ({ navigation }) => {
    
    return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
        <AddButton></AddButton>
        <View style={styles.space}/>
        <EditButton></EditButton>
        <View style={styles.space}/>
        <ShareButton></ShareButton>
        <View style={styles.space}/>
        <ExportButton></ExportButton>
        </View>
        <Scroller></Scroller>
        {menuBar(navigation)}
        <Text>Grocery</Text> 
      </View>

    );
  };
  
  export {GroceryScreen};