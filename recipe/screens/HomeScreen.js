import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import BasicButton from "../components/BasicButton.js";
const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <BasicButton>Normal Recipe</BasicButton>
        <BasicButton>Meal Prep</BasicButton>
        {menuBar(navigation)}
        <Text>home</Text>
      </View>
      
    );
  };
  
  export {HomeScreen};