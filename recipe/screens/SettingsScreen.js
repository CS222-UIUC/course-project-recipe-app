import { menuBar} from "./menubar.js";
import { Image, Text, View } from 'react-native';
import ProfilePic from "../components/ProfilePic.js";
import { styles } from '../components/StyleSheet.js'
import SettingsButton from "../components/SettingsButton.js";
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.containerSettings}>
        <View style={styles.containerProfile}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={require('../assets/mark2.png')}
          />
          <Text style ={styles.titleText}>Mark Wahlberg</Text>
        </View>
        <View style={styles.containerProfile}>
          <View style={styles.space} />
          <SettingsButton>Notifications</SettingsButton>
          <View style={styles.space}/>
          <SettingsButton>Location</SettingsButton>
          <View style={styles.space} />
          <SettingsButton>Settings Option 3</SettingsButton>
          <View style={styles.space} />
          <SettingsButton>Settings Option 4</SettingsButton>
          <View style={styles.Extraspace} />
        </View>
        {menuBar(navigation)}
      </View>
    );
  };

  
  
  export {SettingsScreen};