
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
                style={styles.tinyLogo}
                source={require('../assets/home.png')}
            />
            <Text style={styles.logoText}>Home</Text>
          </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Grocery')
          }
          >
            <Image 
               style={styles.tinyLogo}
                source={require('../assets/grocery.png')}
            />
            <Text style={styles.logoText}>Grocery</Text>
            </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Pantry')
          }
        ><Image 
        style={styles.tinyLogo}
        source={require('../assets/shelving.png')}
        />
        <Text style={styles.logoText}>Pantry</Text>
        </Pressable>
        <Pressable style={styles.menubutton}
          
          onPress={() =>
            navigation.navigate('Settings')
          }
          >
            <Image 
                style={styles.tinyLogo}
                source={require('../assets/settings.png')}
            />
            <Text style={styles.logoText}>Settings</Text>
          </Pressable>
          
      </View>
    )
    ;
   
    
  };

  export {menuBar};