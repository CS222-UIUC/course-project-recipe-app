import {Pressable, View, Text } from 'react-native';
import {styles} from "./StyleSheet.js";
//This is the general button used for the settings page.
function SettingsButton({children}) {
    return (
    <View style={styles.settingsStyle}>
        <Pressable>
            <View>
            <Text style ={styles.titleText}>{children}</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default SettingsButton;