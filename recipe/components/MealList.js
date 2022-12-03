import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {styles} from "./StyleSheet.js";


function MealList({items}) {
    const [listItems, setList] = useState([]); 

    useEffect(() => {
        
        async function getRecipes () {
        try {
            let response = fetch(
                'http://192.168.1.93:3001/recipes'
            ).then((response) => response.json())
                .then((json) => {
                    var recipes = [];
                    var array = json.slice(1, -1).split(',');
                    for (var i in array) {
                        var recipeName = array[i].slice(1, -1);
                        if (recipeName && recipeName != "") {
                            recipes.push({ recipe: array[i].slice(2, -1), key: i });
                        } 
                    }
                    setList(recipes);
            }).catch(error => {console.log(error)});     
        } catch (error) {
            console.error(error);
        }
        };
        getRecipes();
    }, [listItems])

    return (
        <View style = {styles.listscrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
                    return(
                    <Pressable key={item.key} style= {styles.listscrollitem}>
                        <Text style= {styles.listscrolltext}>{item.recipe}</Text>
                    </Pressable>
                    );
                    
                })}
            </ScrollView> 
            
        </View>
    );
}

export default MealList;



