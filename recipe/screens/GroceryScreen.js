
import { menuBar} from "./screens/menubar.js";
import {  Text, View } from 'react-native';
const GroceryScreen = ({ navigation }) => {
    return (
      <View >
        {menuBar(navigation)}
        <Text>Grocery</Text>
      </View>
    );
  };
  
  export {GroceryScreen};