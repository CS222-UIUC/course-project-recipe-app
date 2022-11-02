import { Platform, Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "./StyleSheet.js";
function FeaturedTab({children, color, onPress}) {
    return (
    <View style={styles.featuredStyle}>
        <Pressable
        onPress={onPress}
        >
            <View>
                <Text style ={styles.titleText}>Featured Tab</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default FeaturedTab;