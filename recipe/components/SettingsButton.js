import { View, Text } from 'react-native';
import {styles} from "./StyleSheet.js";
//This is the general button used for the settings page.
function SettingsButton({children}) {
    return (
    <View style={styles.settingsStyle}>
        <Text>{children}</Text>
    </View>
    );
}
export default SettingsButton;