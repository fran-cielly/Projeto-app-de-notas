import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default(props)=>{
    return(
        <View>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>{
                props.navigation.navigate('TelaNota')}}>
                <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#0F62FE',
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 100,
    },
    textoBotao: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    }
})
