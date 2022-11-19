import { Platform, Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function EditButton({children, color, onPress}) {
    return (
    <View style={styles.roundButton}>
        <Pressable
        onPress={onPress}
        style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
            <View>
                <Text>Edit</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default EditButton;