import { View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
function BasicButton({children}) {
    return (
    <View>
        <Text>{children}</Text>
    </View>
    );
}
export default BasicButton;
