import { connection } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from "../StyleSheet.js";

function GroceryScroller({items}) {
    const [listItems, setList] = useState([]); 
    
    useEffect(() => {
        
        async function getGroceries () {
        try {
            let response = fetch(
                'http://192.168.1.93:3001/groceries'
            ).then((response) => response.json())
                .then((json) => {
                    var groceries = [];
                    var array = json.slice(1, -1).split(',');
                    for (var i in array) {
                        groceries.push({ item: array[i].slice(1, -1), key: i });
                    }
                    setList(groceries);
            }).catch(error => {console.log(error)});     
        } catch (error) {
            console.error(error);
        }
        };
        getGroceries();
    }, [listItems])
    return (
        <View style = {styles.scrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text >{item.item}</Text>
                        </View>
                    )
                })}
            </ScrollView> 
            
        </View>
    );
}
export default GroceryScroller;



