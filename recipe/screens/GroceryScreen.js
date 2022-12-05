
import { menuBar} from "./menubar.js";
import {ScrollView, StyleSheet,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import AddButton from "../components/GroceryPageComponents/AddButton.js";
import EditButton from "../components/GroceryPageComponents/EditButton.js";
import ShareButton from "../components/GroceryPageComponents/ShareButton.js";
import ExportButton from "../components/GroceryPageComponents/ExportButton.js";
import Scroller from "../components/ScrollView.js";
import GroceryScroller from "../components/GroceryPageComponents/GroceryScrollView.js";
import GrocerySearchBar from "../components/GroceryPageComponents/GrocerySearchBar.js";
import react, {useState} from 'react';
const GroceryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
    return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
        <GrocerySearchBar searchText={searchText} setSearchText = {setSearchText}/>
        <ExportButton></ExportButton>
        </View>
        
        <GroceryScroller></GroceryScroller>
        {menuBar(navigation)}
      </View>

    );
  };
  
  export {GroceryScreen};