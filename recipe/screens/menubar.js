
import {  View, Button} from 'react-native';
const menuBar =  navigation  => {
    return (
      <View>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
        <Button
          title="Grocery"
          onPress={() =>
            navigation.navigate('Grocery')
          }
        />
        <Button
          title="Pantry"
          onPress={() =>
            navigation.navigate('Pantry')
          }
        />
        <Button
          title="Settings"
          onPress={() =>
            navigation.navigate('Settings')
          }
        />
      </View>
    )
    ;
   
    
  };

  export {menuBar};