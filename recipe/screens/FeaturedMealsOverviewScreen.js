import { View, Text, StyleSheet } from 'react-native'
import StaticMealList from '../components/StaticMealList';
function FeaturedMealsOverviewScreen() {
    return (
        <View style={styles.container}>
          <StaticMealList></StaticMealList>
        </View>
    );
}
export default FeaturedMealsOverviewScreen
const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
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
    )
    ;
   
    
  };

  export {value};