import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import BasicButton from "../components/BasicButton.js";
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <BasicButton>Normal Recipe</BasicButton>
        <BasicButton>Meal Prep</BasicButton>
        {menuBar(navigation)}
        <Text>home</Text>
      </View>
      
    );
  };
  
  export {HomeScreen};