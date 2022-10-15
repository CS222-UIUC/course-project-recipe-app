import { View, Text } from 'react-native';
//This button could be used on the pantry and grocery list
// when editing, exporting, or sharing your lists!
function PantryAndGroceryButton({children}) {
    return (
    <View>
        <Text>{children}</Text>
    </View>
    );
}
export default PantryAndGroceryButton;