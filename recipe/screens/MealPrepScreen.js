import { View, Text, StyleSheet } from 'react-native'
function MealPrepScreen() {
    return (
        <View style={styles.container}>
           <Text> Meal Prep </Text> 
        </View>
    );
}
export default MealPrepScreen
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});