import { View, Text } from 'react-native';
//This button could be used on the pantry and grocery list
// when editing, exporting, or sharing your lists!
import {styles} from "./StyleSheet.js";
function PantryAndGroceryButton({children}) {
    return (
    <View style={styles.roundButton}>
        <Text>{children}</Text>
    </View>
    );
}
export default PantryAndGroceryButton;