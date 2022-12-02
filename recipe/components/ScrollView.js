import { connection } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from "./StyleSheet.js";


function Scroller({items}) {
    const [listItems, setList] = useState([]); 
    
    useEffect(() => {
        
        async function getIngredients () {
        try {
            let response = fetch(
                'http://192.168.1.93:3001/pantry'
            ).then((response) => response.json())
                .then((json) => {
                    var ingredients = [];
                    var array = json.slice(1, -1).split(',');
                    for (var i in array) {
                        ingredients.push({ ingredient: array[i].slice(1, -1), key: i });
                    }
                    setList(ingredients);
            }).catch(error => {console.log(error)});     
        } catch (error) {
            console.error(error);
        }
        };
        getIngredients();
    }, [listItems])
    return (
        <View style = {styles.scrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
<<<<<<< HEAD
                    return (
                        <View key={item.key}>
                            <Text >{item.ingredient}</Text>
                        </View>
                    )
=======
                    return(
                    <View key={item.key} style= {styles.scrollitem}>
                        
                        <Text style= {styles.scrolltext}>{item.listItems}</Text>
                    </View>
                    );
                    
>>>>>>> 7bf82e109a167ff4fb0dc2d1881dbbd8a951e06a
                })}
            </ScrollView> 
            
        </View>
    );
}
function longItem({keya, listItems}){
    return (
        <View key={keya}>
            <Text >{listItems}</Text>
        </View>
    )

}
export default Scroller;



