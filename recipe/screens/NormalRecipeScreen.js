import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList';
import {styles} from '../components/StyleSheet.js'
import { menuBar } from './menubar';
const NormalRecipeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Normal Recipe </Text> 
            
            <MealList>
            </MealList>
            {menuBar(navigation)}
        </View>
    );
}
export default NormalRecipeScreen

