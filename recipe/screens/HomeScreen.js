import { menuBar} from "./menubar.js";
import { Button,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import FeaturedTab from "../components/FeaturedTab.js";
import NormalRecipeButton from "../components/NormalRecipeButton.js";
import MealPrepButton from "../components/MealPrepButton.js";
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <FeaturedTab onPress={() =>
            navigation.navigate('Featured')}/>
        <View style={styles.space} />
        <NormalRecipeButton onPress={() =>
            navigation.navigate('Normal')} />
        <View style={styles.space} />
        <MealPrepButton onPress={() =>
            navigation.navigate('Prep')} />
        {menuBar(navigation)}
      </View>
      
    );
  };
  
  export {HomeScreen};