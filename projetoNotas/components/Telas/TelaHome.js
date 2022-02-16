import React,{useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { listarNotas } from '../Banco/BancoNota';
import Nota from '../Nota/Nota';
import BotaoNovaNota from '../Botoes/BotaoNovaNota';
import ListaSemNotas from '../Nota/ListaSemNotas';

export default (props)=>{

    const [listaResultado, setListaResultado] = useState({});

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            async function fetchData() {
                const lista = await listarNotas();
                setListaResultado(lista);
                console.log(lista);
            }
            fetchData();
        });
    });

    if (listaResultado.length > 0){
        return(
            <SafeAreaView style={styles.container}>
            <FlatList
                    style={styles.containerNotas}
                    data={listaResultado}
                    numColumns={2}
                    renderItem={({item})=>{
                        return(
                            <Nota {...props} nota={item}></Nota>
                        )
                    }}
                />
                <View style={styles.caixaBotao}>
                    <BotaoNovaNota {...props}/>
                </View>
            
            </SafeAreaView>
        )
    }else{
        return(
            <SafeAreaView style={styles.container}>
                <ListaSemNotas/>
                <View style={styles.caixaBotao}>
                    <BotaoNovaNota {...props}/>
                </View>
            </SafeAreaView>
        )
    }

   
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    },
    caixa: {
        height: Dimensions.get('window').height,
        padding: 20,
        paddingTop: 70,
    },
    caixaBotao: {
        position: 'absolute',
        bottom: 140,
        right: 20,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    containerNotas:{
        width: Dimensions.get('window').width,
        padding:10
    },
});