import { connection } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView,Image, Pressable } from 'react-native';
import {styles} from "./StyleSheet.js";


function Scroller({items}) {
    const [listItems, setList] = useState([]); 
    
    useEffect(() => {
        
        async function getIngredients () {
        try {
            let response = fetch(
                'http://10.0.0.72:3001/pantry'
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
                 
                    return(
                    <View key={item.key} style= {styles.scrollitem}>
                        
                        <Text style= {styles.scrolltext}>{item.ingredient}</Text>
                        <Pressable style={styles.removebutton}
          
                            onPress={() => {
                                fetch('http://10.0.0.72:3001/delete/pantry', {
                                method: 'POST',
                                headers: {"Conent-Type": "application/json"},
                                body: item.ingredient
                            })
                            .catch(error => { console.log(error) })
                            }}
                            ><Image 
                            style={styles.removeLogo}
                            source={require('../assets/delete.png')}
                            />
                            
                            </Pressable>
                    </View>
                    );
                    
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



