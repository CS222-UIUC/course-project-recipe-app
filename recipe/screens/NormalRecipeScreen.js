import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {styles} from '../components/StyleSheet.js';
import { menuBar } from './menubar';
import {useNavigation, useRoute} from "@react-navigation/native";
const NormalRecipeScreen = ({items}) => {
    const [name, setName] = useState('Salad with Smoked Salmon');
    const [ingredients, setIngredients] = useState([
        'Arugula',
        "Lamb's Lettuce",
        'Parsley',
        'Fennel',
        '200g Smoked Salmon',
        'Mustard',
        'Balsamic Vinegar',
        'Olive Oil',
        'Salt and Pepper'
      ]);
    const [recipe, setRecipe] = useState( [
        'Wash and cut salad and herbs',
        'Dice the salmon',
        'Process mustard, vinegar and olive oil into a dessing',
        'Prepare the salad',
        'Add salmon cubes and dressing'
      ]);
    const [prepTime, setPrepTime] = useState('30 Minutes');
    const navigation = useNavigation();
    const dataTransfer = () => {
        navigation.navigate("Overview", {
            name: name,
            ingredients: ingredients,
            recipe: recipe,
            prepTime: prepTime,
        });
    };
    return (
        <View style={styles.container}>
            <MealList navigation={navigation}>
            </MealList>
            {menuBar(navigation)}
        </View>
    );
}
export default NormalRecipeScreen

