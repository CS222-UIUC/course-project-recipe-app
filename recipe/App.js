import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, div } from 'react-native';
import { Component } from 'react';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Grocery" component={GroceryScreen} />
         <Stack.Screen name="Pantry" component={PantryScreen} /> 
          <Stack.Screen name="Settings" component={SettingsScreen} /> 
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {menuBar(navigation)}
      <Text>home</Text>
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  return (
    <View >
      
      {menuBar(navigation)}
      
      <Text>Settings</Text>
    </View>
  );
};
const GroceryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     {menuBar(navigation)}
      <Text>Grocery</Text>
    </View>
  );
};
const PantryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {menuBar(navigation)}
      <Text>Pantry</Text>
    </View>
    
  );
 
  
};
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
export default App