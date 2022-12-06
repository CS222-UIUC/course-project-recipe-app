import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../../components/StyleSheet';
import { menuBar } from '../menubar';
const PancakesDetailScreen = ({ navigation }) => {
    const route  = useRoute();
    return (
    <View style={styles.containerMeals}>
      <View style={styles.integratedstyling}>
        <Text style = {{fontWeight: "bold"}}> Name: </Text>
        <Text> Pancakes </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text> 30 minutes </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Ingredients:</Text>
        <Text>          '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'</Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Recipe:</Text>
        <Text>
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'</Text>
      </View>
      {menuBar(navigation)}
    </View>
    );
}
export default PancakesDetailScreen;