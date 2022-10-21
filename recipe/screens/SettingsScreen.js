import { menuBar} from "./menubar.js";
import {  Text, View } from 'react-native';
import ProfilePic from "../components/ProfilePic.js";
import { styles } from '../components/StyleSheet.js'
import SettingsButton from "../components/SettingsButton.js";
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ProfilePic>Change Picture</ProfilePic>
        <Text>Name</Text>
        <SettingsButton>Settings Option 1</SettingsButton>
        <SettingsButton>Settings Option 2</SettingsButton>
        <SettingsButton>Settings Option 3</SettingsButton>
        <SettingsButton>Settings Option 4</SettingsButton>
        {menuBar(navigation)}
        <Text>Settings</Text>
      </View>
    );
  };

  
  
  export {SettingsScreen};