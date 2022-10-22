import { menuBar} from "./menubar.js";
import { Image, Text, View } from 'react-native';
import ProfilePic from "../components/ProfilePic.js";
import { styles } from '../components/StyleSheet.js'
import SettingsButton from "../components/SettingsButton.js";
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={require('../assets/mark2.png')}
          />
          <Text style ={styles.titleText}>Mark Wahlberg</Text>
        </View>
          <SettingsButton>Settings Option 1</SettingsButton>
          <Text> </Text>
          <SettingsButton>Settings Option 2</SettingsButton>
          <Text> </Text>
          <SettingsButton>Settings Option 3</SettingsButton>
          <Text> </Text>
          <SettingsButton>Settings Option 4</SettingsButton>
          {menuBar(navigation)}
      </View>
    );
  };

  
  
  export {SettingsScreen};