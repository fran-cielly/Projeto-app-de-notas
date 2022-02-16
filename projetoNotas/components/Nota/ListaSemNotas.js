import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

export default()=>{
    return(
        <View style={styles.container}>
             <Image 
                style={styles.camadas}
                source={require('../../assets/img/camadas.png')}/>
            <Text style={[styles.fonte, styles.fonteGrande]}>Não tem nenhuma nota aqui</Text>
            <Text style={[styles.fonte]}>Crie notas e você poderá vê-las aqui.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        marginTop: 60,
        padding: 20,
    },
    camadas: {
        width: 91,
        height: 128,
    },
    fonte: {
        fontFamily: 'IBM Plex Sans',
        marginTop: 5,
    },
    fonteGrande: {
        fontSize: 25,
        fontWeight: '400',
        color: 'black',
        marginTop: 10,
    },
})