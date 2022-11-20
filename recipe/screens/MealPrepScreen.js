import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList';
import {styles} from '../components/StyleSheet.js'
import { menuBar } from './menubar';
const MealPrepScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <MealList>
            </MealList>
            {menuBar(navigation)}
        </View>
    );
}
export default MealPrepScreen
