import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import ProfilePic from "../components/ProfilePic.js";
import { styles } from '../components/StyleSheet.js'
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ProfilePic>Change Picture</ProfilePic>
        {menuBar(navigation)}
        <Text>Settings</Text>
      </View>
    );
  };

  
  
  export {SettingsScreen};