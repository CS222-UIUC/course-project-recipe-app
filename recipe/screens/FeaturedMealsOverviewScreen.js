import { View, Text, StyleSheet } from 'react-native'
import AsparagusSaladButton from '../components/FeaturedMealButtons/Asparagus';
import ChocolateSouffleButton from '../components/FeaturedMealButtons/Salad';
import CreamyChickenButton from '../components/FeaturedMealButtons/CreamyIndian';
import PancakesButton from '../components/FeaturedMealButtons/Pancakes';
import StaticMealList from '../components/StaticMealList';
import SaladButton from '../components/FeaturedMealButtons/Salad';
import { menuBar } from './menubar';
const FeaturedMealsOverviewScreen = ({ navigation }) => {
    return (
        <View style={styles.FeaturedContainer}>
          <CreamyChickenButton onPress={() =>
            navigation.navigate('Creamy Indian Chicken Curry')}/>
          <View style={{height: 20}} />
          <SaladButton onPress={() =>
           navigation.navigate('Salad with Smoked Salmon')}/>
          <View style={{height: 20}} />
          <PancakesButton onPress={() =>
           navigation.navigate('Pancakes')}/>
          <View style={{height: 20}} />
          <AsparagusSaladButton onPress={() =>
           navigation.navigate('Asparagus Salad with Cherry Tomatoes')} />
           {menuBar(navigation)}
        </View>
    );
}
export default FeaturedMealsOverviewScreen
const styles =  StyleSheet.create({
  FeaturedContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 140,
  },
});
const value =  navigation  => {
    return (
      <View>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('MealS')
          }
        />
      </View>
    );
  };

  export {value};