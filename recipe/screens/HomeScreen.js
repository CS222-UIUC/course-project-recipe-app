import { menuBar} from "./menubar.js";
import { Button,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
import FeaturedTab from "../components/FeaturedTab.js";
import NormalRecipeButton from "../components/NormalRecipeButton.js";
import MealPrepButton from "../components/MealPrepButton.js";
import { CATEGORIES } from "../data/dummy-data.js";
import { FlatList } from "react-native";
function renderCategoryItem(item) {
  return ;
}
const HomeScreen = ({ navigation }) => {
    return (
      // <FlatList
      //  data={CATEGORIES}
      //   keyExtractor={(item) => item.id}
      //    renderItem={renderCategoryItem}
      //     />
      <View style={styles.container}>
        <FeaturedTab onPress={() =>
            navigation.navigate('Featured')}/>
        <View style={styles.space} />
        <NormalRecipeButton onPress={() =>
            navigation.navigate('Normal')} />
        <View style={styles.space} />
        <MealPrepButton onPress={() =>
            navigation.navigate('Prep')} />
        <View style={styles.Extraspace} />
        {menuBar(navigation)}
      </View>
      
    );
  };
  
  export {HomeScreen};