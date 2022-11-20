import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, div } from 'react-native';
import { Component } from 'react';
import { PantryScreen } from './screens/PantryScreen.js';
import { GroceryScreen } from './screens/GroceryScreen.js';
import { HomeScreen } from './screens/HomeScreen.js';
import { SettingsScreen } from './screens/SettingsScreen.js';
import FeaturedMealsOverviewScreen from './screens/FeaturedMealsOverviewScreen.js';
import MealPrepScreen from './screens/MealPrepScreen.js';
import NormalRecipeScreen from './screens/NormalRecipeScreen.js';
import MealDetailScreen from './screens/MealDetailsScreen.js';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      
        <Stack.Navigator >
         <Stack.Screen  options={{ headerShown: false, animation: 'fade'}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false, animation: 'fade'}}name="Grocery" component={GroceryScreen} />
         <Stack.Screen options={{ headerShown: false, animation: 'fade'}}name="Pantry" component={PantryScreen} /> 
          <Stack.Screen options={{ headerShown: false, animation: 'fade'}}name="Settings" component={SettingsScreen} />
          <Stack.Screen options={{animation: 'fade'}} name="Featured" component={FeaturedMealsOverviewScreen} /> 
          <Stack.Screen options={{animation: 'fade'}} name="Prep" component={MealPrepScreen} />
          <Stack.Screen options={{animation: 'fade'}} name="Normal" component={NormalRecipeScreen} />
          <Stack.Screen options={{animation: 'fade'}} name="Overview" component={MealDetailScreen} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App