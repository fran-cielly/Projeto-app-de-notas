import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import {getCor} from '../ListaCores';

export default (props)=>{

    const nota = props.route.params;

    const corCod = getCor(nota.cor);

    const [prioridade, setPrioridade] = useState(nota.prioridade);
    const [cor, setCor] = useState(nota.cor);

    return(
        <SafeAreaView style = {{height: (Dimensions.get('window').height),}}>
            <View style = {styles.container}>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Nome</Text>
                    <Text style={styles.nomeNota}>{nota.nome}</Text>
                </View>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Descrição</Text>
                    <Text style={styles.campoNota}>{nota.nome}</Text>
                </View>
                 <View style={styles.caixaCampo}>
                    <Picker
                        style={styles.picker}
                        selectedValue={prioridade}>
                        <Picker.Item label={prioridade} value={prioridade}/>
                    </Picker>
                </View>
                <View style={styles.caixaCampo}>
                    <Picker
                        style={{backgroundColor:corCod}}
                        selectedValue={cor}>
                        <Picker.Item label={cor} value={cor}/>
                    </Picker>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
    },
    caixaCampo:{
        marginTop: 25,
    },
    nomeCampo:{
        fontFamily: 'IBM Plex Sans',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
    },
    nomeNota:{
        fontFamily: 'IBM Plex Sans',
        fontSize: 30,
        color: 'black',
    },
    campoNota:{
        fontFamily: 'IBM Plex Sans',
        fontSize: 16,
        color: 'black',
    },
    picker:{
        backgroundColor: '#F4F4F4',
    }
})