import { View, Text, StyleSheet } from 'react-native'
function NormalRecipeScreen() {
    return (
        <View style={styles.container}>
            <Text> Normal Recipe </Text> 
        </View>
    );
}
export default NormalRecipeScreen
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
