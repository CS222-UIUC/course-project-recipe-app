import { View, Text } from 'react-native';
import {styles} from "./StyleSheet.js";
//This button can be used when the person wants to change their profile picture
function ProfilePic({children}) {
    return (
    <View style={styles.profilePic}>
        <Pressable>
            <View>
                <Text style ={styles.titleText}>{children}</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default ProfilePic;