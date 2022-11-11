import { Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "./StyleSheet.js";
function NormalRecipeButton({children, onPress}) {
    return (
    <View style={styles.settingsStyle}>
        <Pressable
                onPress={onPress}
        >
            <View>
                <Text style ={styles.titleText}>Normal Recipes</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default NormalRecipeButton;
