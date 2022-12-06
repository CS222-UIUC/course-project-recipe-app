import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../../components/StyleSheet';
import { menuBar } from '../menubar';
const CreamyIndianDetailScreen = ({ navigation }) => {
    const route  = useRoute();
    return (
    <View style={styles.containerMeals}>
      <View style={styles.integratedstyling}>
        <Text style = {{fontWeight: "bold"}}> Name: </Text>
        <Text> Creamy Indian Chicen Curry </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text> 50 minutes </Text>
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
        <Text>     'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'</Text>
      </View>
      {menuBar(navigation)}
    </View>
    );
}
export default CreamyIndianDetailScreen;