import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from "./StyleSheet.js";


function Scroller({items}) {
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
        <View style = {styles.scrollview}> 
            <ScrollView> 
                { listItems.map((item) => {
                    return(
                    <View key={item.key} style= {styles.scrollitem}>
                        
                        <Text style= {styles.scrolltext}>{item.listItems}</Text>
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



