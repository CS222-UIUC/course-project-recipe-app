import { Platform, Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function ScanButton({children, color, onPress, navigation}) {
    return (
    <View style={styles.roundButton}>
        <Pressable
                onPress={() => {
                    console.log("HELLO")
                    navigation.navigate('Scan')
                }}
        >
            <View>
                <Text>Scan</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default ScanButton;