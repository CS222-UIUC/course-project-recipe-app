import React, {useState} from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {styles} from "./StyleSheet.js";


function MealList({items}) {
    const[listItems, setList] = useState([
        { listItems: 'test1', key: '1'},
        { listItems: 'test2', key: '2'},
        { listItems: 'test1', key: '3'},
        { listItems: 'test1', key: '4'},
        { listItems: 'test1', key: '5'},
        { listItems: 'test1', key: '6'},
        { listItems: 'test1', key: '7'},
      ]);
    return (
        <View style = {styles.listscrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
                    return(
                    <Pressable key={item.key} style= {styles.listscrollitem}>
                        
                        <Text style= {styles.listscrolltext}>{item.listItems}</Text>
                    </Pressable>
                    );
                    
                })}
            </ScrollView> 
            
        </View>
    );
}

export default MealList;



