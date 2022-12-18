import React, {useState} from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {styles} from "./StyleSheet.js";


function StaticMealList({items, onPress}) {
    const[listItems, setList] = useState([
        { listItems: 'Creamy Indian Chicken Curry', key: '1'},
        { listItems: 'Chocolate Souffle', key: '2'},
        { listItems: 'Asparagus Salad with Cherry Tomatoes', key: '3'},
        { listItems: 'Pancakes', key: '4'},
      ]);
    return (
        <View style = {styles.listscrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
                    return(
                    <Pressable 
                    onPress = {onPress}
                    key={item.key} style= {styles.listscrollitem}
                    Style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
                    > 
                        <Text style= {styles.listscrolltext}>{item.listItems}</Text>
                    </Pressable>
                    ); 
                })}
            </ScrollView> 
        </View>
    );
}

export default StaticMealList;



