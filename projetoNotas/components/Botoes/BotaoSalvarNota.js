import React from 'react';
import {Button, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {salvarNota, salvarNotaEditada} from '../Banco/BancoNota';

export default ({nota, props, antigaNota})=>{

    let textoBotao;
    if(antigaNota){
        textoBotao = 'Editar Nota';
    }else{
        textoBotao = 'Nova Nota';
    }

    return(
        <TouchableOpacity
            style={styles.botao}
            onPress={()=>{
                if(antigaNota){
                    salvarNotaEditada(nota, antigaNota);
                }else{
                    salvarNota(nota);
                }
              
                props.navigation.navigate('TelaHome');
            }}>
            <Text style={styles.textoBotao}>{textoBotao}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 80,
        backgroundColor: '#0F62FE',
        bottom: 60,
        padding: 10,
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
})