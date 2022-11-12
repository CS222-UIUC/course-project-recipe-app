import { menuBar} from "./menubar.js";
import {  ScrollView, Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import InputButton from "../components/PantryPageComponents/InputButton.js";
import PantryEditButton from "../components/PantryPageComponents/PantryEditButton.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import Scroller from "../components/ScrollView.js";
import SearchBar from "../components/PantryPageComponents/SearchBar.js";
import react, {useState} from 'react';
const PantryScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    return (
      <View style={styles.container}>
        <View style={styles.containerHorizontal}>
          <InputButton></InputButton>
          <View style={styles.space} />
          <PantryEditButton></PantryEditButton>
          <View style={styles.space} />
          <ScanButton></ScanButton>
        </View>
        <SearchBar searchText={searchText} setSearchText = {setSearchText}/>
        {menuBar(navigation)}
      </View>
    );
  };
  
  export {PantryScreen};