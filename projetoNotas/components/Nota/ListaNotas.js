import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default ({lista})=>{

    const [list, setList] = useState(lista);

    console.log(list);

    return(
        <View>
            <FlatList
                data={list}
                renderItem={(item)=>{
                    return<Text>aaaa</Text>
                }}
            >
            </FlatList>
        </View>
    )
}