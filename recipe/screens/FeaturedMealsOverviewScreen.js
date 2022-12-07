import { View, Text, StyleSheet } from 'react-native'
function FeaturedMealsOverviewScreen() {
    return (
        <View style={styles.container}>
           <Text> Featured </Text> 
        </View>
    );
}
export default FeaturedMealsOverviewScreen
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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