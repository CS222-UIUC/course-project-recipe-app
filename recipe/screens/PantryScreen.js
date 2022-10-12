import { menuBar} from "./screens/menubar.js";
import {  Text, View } from 'react-native';
const PantryScreen = ({ navigation }) => {
    return (
      <View >
        {menuBar(navigation)}
        <Text>Pantry</Text>
      </View>
    );
  };
  
  export {PantryScreen};