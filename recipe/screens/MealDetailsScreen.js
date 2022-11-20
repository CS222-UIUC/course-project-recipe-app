import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
function MealDetailScreen() {
    const route  = useRoute();
    return (
    <View>
        <Text>name: {route.params.name} </Text>
        <Text>prepTime: {route.params.prepTime} </Text>
        <Text>ingredients: {route.params.ingredients} </Text>
        <Text>recipe: {route.params.recipe} </Text>
    </View>
    );
}
export default MealDetailScreen;