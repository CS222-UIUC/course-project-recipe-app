import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../../components/StyleSheet';
import { menuBar } from '../menubar';
const AsparagusDetailScreen = ({ navigation }) => {
    const route  = useRoute();
    return (
    <View style={styles.containerMeals}>
      <View style={styles.integratedstyling}>
        <Text style = {{fontWeight: "bold"}}> Name: </Text>
        <Text> Asparagus Salad with Cherry Tomatoes </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text> 40 minutes </Text>
        <View style = {styles.space}/>
        <Text style = {{fontWeight: "bold"}}>Ingredients:</Text>
        <Text>      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'</Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Recipe:</Text>
        <Text>     'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'</Text>
      </View>
      {menuBar(navigation)}
    </View>
    );
}
export default AsparagusDetailScreen;