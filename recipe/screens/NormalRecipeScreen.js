import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList';
import {styles} from '../components/StyleSheet.js'
import { menuBar } from './menubar';
const NormalRecipeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
<<<<<<< HEAD
            <Text> Normal Recipe </Text> 
=======
            
            <MealList>
            </MealList>
            {menuBar(navigation)}
>>>>>>> 7bf82e109a167ff4fb0dc2d1881dbbd8a951e06a
        </View>
    );
}
export default NormalRecipeScreen

