import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from "./StyleSheet.js";


function ScrollView({items}) {
    return (
        <View> 
            <ScrollView> 
                { items.map((item) => {
                    return (
                        <View>
                            <Text>(item.name)</Text>
                        </View>
                    )
                })}
            </ScrollView> 
            
        </View>
    );
}
export default ScrollView;



