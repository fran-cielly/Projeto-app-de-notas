import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default (props) => {
    const nota = props.route.params;

    return(
         <View>
            <TouchableOpacity
                onPress={()=>{
                props.navigation.navigate('TelaNota', nota)}}>
                <Text>editar</Text>
            </TouchableOpacity>
        </View>
    )
}