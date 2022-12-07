import { menuBar} from "./menubar.js";
import {  ScrollView, Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import InputButton from "../components/PantryPageComponents/InputButton.js";
import PantryEditButton from "../components/PantryPageComponents/PantryEditButton.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import Scroller from "../components/ScrollView.js";
import PantrySearchBar from "../components/PantryPageComponents/PantrySearchBar.js";
import react, {useEffect, useState} from 'react';
const PantryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
        
        <PantrySearchBar style={styles.searchBar} searchText={searchText} setSearchText={setSearchText}/>
        <ScanButton navigation={navigation}></ScanButton>
        </View>
        
        
       
        <Scroller></Scroller>
        {menuBar(navigation)}
      </View>
    );
  };
  
  export {PantryScreen};