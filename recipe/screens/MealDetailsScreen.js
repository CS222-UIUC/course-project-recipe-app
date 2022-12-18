import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../components/StyleSheet';
function MealDetailScreen() {
    const route  = useRoute();
    return (
    <View style={styles.containerMeals}>
        <Text style = {{fontWeight: "bold"}}> Name: </Text>
        <Text>{route.params.name} </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text>{route.params.prepTime} </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Ingredients:</Text>
        <Text>{route.params.ingredients}</Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Recipe:</Text>
        <Text>{route.params.recipe}</Text>
    </View>
    );
}
export default MealDetailScreen;