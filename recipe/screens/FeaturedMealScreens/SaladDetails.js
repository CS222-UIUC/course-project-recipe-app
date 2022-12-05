import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../../components/StyleSheet';
function SaladDetailScreen() {
    const route  = useRoute();
    return (
    <View style={styles.containerMeals}>
        <Text style = {{fontWeight: "bold"}}> Name: </Text>
        <Text> Salad with Smoked Salmon </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text> 45 minutes </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Ingredients:</Text>
        <Text>      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'</Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Recipe:</Text>
        <Text>      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'</Text>
    </View>
    );
}
export default SaladDetailScreen;