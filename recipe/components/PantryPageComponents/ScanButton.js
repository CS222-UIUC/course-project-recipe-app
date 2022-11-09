import { Platform, Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function ScanButton({children, color, onPress}) {
    return (
    <View style={styles.roundButton}>
        <Pressable
        onPress={onPress}
        >
            <View>
                <Text>Scan</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default ScanButton;