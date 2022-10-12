import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, div } from 'react-native';
import { Component } from 'react';
import { PantryScreen } from './PantryScreen.js';
import { GroceryScreen } from './GroceryScreen.js';
import { HomeScreen } from './HomeScreen.js';
import { SettingsScreen } from './SettingsScreen.js';

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

export default App