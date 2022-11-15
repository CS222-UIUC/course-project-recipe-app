import { Pressable, View, Text } from 'react-native';
//This button could be used on the pantry and grocery list
// when editing, exporting, or sharing your lists!
import {styles} from "./StyleSheet.js";
function PantryAndGroceryButton({children}) {
    return (
    <View style={styles.roundButton}>
        <Pressable>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default PantryAndGroceryButton;