import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import { styles } from './App.js'
const SettingsScreen = ({ navigation }) => {
    return (
      <View>
        {menuBar(navigation)}
        <Text>Settings</Text>
      </View>
    );
  };
  
  export {SettingsScreen};