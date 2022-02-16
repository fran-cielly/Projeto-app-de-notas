import React,{useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import BotaoSalvarNota from '../Botoes/BotaoSalvarNota';


export default (props)=>{

    const [prioridade, setPrioridade] = useState('Urgente');
    const [cor, setCor] = useState('Básico');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    let editando = false;
    const nota = props.route.params;

    useEffect(() => {
        if (nota !== undefined) {
            editando = true;
         
            setPrioridade(nota.prioridade);
            setCor(nota.cor);
            setDescricao(nota.descricao);
            setNome(nota.nome);
        }
    },[nota]);
    
    return(
        <SafeAreaView style = {{height: (Dimensions.get('window').height),}}>
            <View style = {styles.container}>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Nome da nota(obrigatória)</Text>
                    <TextInput placeholder='Insira' value={nome}  style={styles.campo} onChangeText={(text)=>{
                        setNome(text);
                    }}/>
                </View>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Descrição</Text>
                    <TextInput value={descricao} placeholder='Insira' multiline={true}  style={[styles.campo, styles.textArea]} onChangeText={(text)=>{
                        setDescricao(text);
                    }}/>
                </View>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Prioridade</Text>
                    <Picker
                        style={styles.campo}
                        selectedValue={prioridade}
                        onValueChange={(itemValue, itemIndex)=>{
                            setPrioridade(itemValue);
                        }}>
                        <Picker.Item label='Urgente' value='Urgente'/>
                        <Picker.Item label='Alta' value='Alta'/>
                        <Picker.Item label='Média' value='Média'/>
                        <Picker.Item label='Baixa' value='Baixa'/>
                    </Picker>
                </View>
                <View style={styles.caixaCampo}>
                    <Text style={styles.nomeCampo}>Cor</Text>
                    <Picker
                        style={styles.campo}
                        selectedValue={cor}
                        onValueChange={(itemValue, itemIndex)=>{
                            setCor(itemValue);
                        }}>
                        <Picker.Item label='Básico' value='Básico'/>
                        <Picker.Item label='Rosa' value='Rosa'/>
                        <Picker.Item label='Azul' value='Azul'/>
                        <Picker.Item label='Verde-água' value='Verde-água'/>
                </Picker>
                </View>
            </View>

                <BotaoSalvarNota props={props} antigaNota={nota}
                nota={{nome:nome, descricao: descricao, prioridade:prioridade, cor:cor}}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
    },
    caixaCampos:{
        padding: 20
    },
    caixaCampo: {
        paddingTop: 15,
    },
    campo: {
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
        nomeCampo: {
            fontWeight: '400',
    },
        textArea: {
        height: 150,
        textAlignVertical: 'top',
    }
})