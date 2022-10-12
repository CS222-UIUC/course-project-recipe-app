import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
const HomeScreen = ({ navigation }) => {
    return (
      <View>
        {menuBar(navigation)}
        <Text>home</Text>
      </View>
    );
  };
  
  export {HomeScreen};