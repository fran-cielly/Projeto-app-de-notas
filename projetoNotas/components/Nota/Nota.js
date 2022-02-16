import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import {getCor} from '../ListaCores'

export default(props)=>{

    const nota = props.nota;

    const cor = getCor(nota.cor);

    return(
        <View>
            <TouchableOpacity
                onPress={()=>{
                props.navigation.navigate('TelaVerNota', nota)}}>

                <View style={[{backgroundColor:cor},styles.caixaNota]}>
                    <Text style={styles.tituloNota}>{nota.nome}</Text>
                    <Text style={styles.descricaoNota}>{nota.descricao}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    caixaNota:{
        width: ((Dimensions.get('window').width)/2)-25,
        marginTop: 10,
        marginLeft:10,
        padding:10,
    },
    tituloNota:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    descricaoNota:{
        fontSize: 16,
    }
  
})