
import { menuBar} from "./menubar.js";
import {ScrollView, StyleSheet,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import AddButton from "../components/GroceryPageComponents/AddButton.js";
import EditButton from "../components/GroceryPageComponents/EditButton.js";
import ShareButton from "../components/GroceryPageComponents/ShareButton.js";
import ExportButton from "../components/GroceryPageComponents/ExportButton.js";
import Scroller from "../components/ScrollView.js";
import SearchBar from "../components/PantryPageComponents/SearchBar.js";
import react, {useState} from 'react';
const GroceryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
    return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
        <EditButton></EditButton>
        <View style={styles.space}/>
        <ShareButton></ShareButton>
        <View style={styles.space}/>
        <ExportButton></ExportButton>
        </View>
        <View style={{height: 40}} />
        <SearchBar searchText={searchText} setSearchText = {setSearchText}/>
        <View style={{height: 60}} />
        <Scroller></Scroller>
        {menuBar(navigation)}
      </View>

    );
  };
  
  export {GroceryScreen};