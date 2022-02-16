import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { excluirNota } from '../Banco/BancoNota';

export default(props)=>{
    const nota = props.route.params;

    return(
        <View>
            <TouchableOpacity
                onPress={()=>{
                    excluirNota(nota);
                    props.navigation.navigate('TelaHome');
                }}>
                <Text>excluir</Text>
             </TouchableOpacity>
        </View>
    )
}