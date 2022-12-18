import { Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function PancakesButton({children, onPress}) {
    return (
    <View style={styles.featuredButton}>
        <Pressable
        onPress={onPress}
        style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
            <View>
                <Text style ={styles.titleText}>Pancakes</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default PancakesButton;