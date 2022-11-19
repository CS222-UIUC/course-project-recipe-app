
import {  View, Text, Image, Pressable} from 'react-native';
import {styles} from "../components/StyleSheet.js";
const menuBar =  navigation  => {
    return (
      
      <View style={styles.menu}>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Home')
          }
          >

            <Image 
                style={{width: 70, height: 70}}
                source={require('../assets/home.png')}
            />
          </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Grocery')
          }
          >
            <Image 
                style={{width: 70, height: 70}}
                source={require('../assets/grocery.png')}
            />
            </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Pantry')
          }
        ><Image 
        style={{width: 70, height: 70}}
        source={require('../assets/shelving.png')}
        />
        </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Settings')
          }
          >
            <Image 
                style={{width: 70, height: 70}}
                source={require('../assets/settings.png')}
            />
          </Pressable>
          
      </View>
    )
    ;
   
    
  };

  export {menuBar};