import  AsyncStorage  from '@react-native-async-storage/async-storage';

export async function salvarNota(nota){
    await AsyncStorage.setItem(nota.nome, JSON.stringify(nota));   
}

export async function encontrarNota(nomeNota){
    return JSON.parse(await AsyncStorage.getItem(nomeNota));
}

export async function listarNotas(){
    //await AsyncStorage.clear();
    const keys = await AsyncStorage.getAllKeys();
    const lista = await AsyncStorage.multiGet(keys);
    
    const listaObjetos = lista.map((item)=>{
        filme = JSON.parse(item[1]);
        return filme;
    })
    return listaObjetos;
}

export async function salvarNotaEditada(nota, antigaNota) {
    excluirNota(antigaNota);
    await AsyncStorage.mergeItem(nota.nome, JSON.stringify(nota));
}

export async function excluirNota(nota){
    await AsyncStorage.removeItem(nota.nome);
}