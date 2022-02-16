import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaHome from "./Telas/TelaHome";
import TelaNota from './Telas/TelaNovaNota';
import TelaVerNota from './Telas/TelaVerNota';
import BotaoFiltrarNotas from './Botoes/BotaoFiltrarNotas';
import BotaoEditarNota from './Botoes/BotaoEditarNota';
import BotaoExcluirNota from './Botoes/BotaoExcluirNota';
import BotaoNovaNota from './Botoes/BotaoNovaNota';

const Stack = createNativeStackNavigator();

export default (props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "TelaHome"
                screenOptions={{
                headerShown:true}}
            >
                <Stack.Screen name="TelaNota" component={TelaNota} options={{ 
                    title: 'Criar Nota',
                    headerStyle:{
                        backgroundColor: '#0F62FE',                
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'IBM Plex Sans',
                    },
                }}/>
                <Stack.Screen name="TelaHome" component={TelaHome} options={(props)=>({
                    title: 'Notas',
                    headerStyle:{
                        backgroundColor: '#0F62FE',                
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'IBM Plex Sans',
                    },
                    headerRight: () => ( 
                        <View>
                            <BotaoNovaNota {...props}/>
                        </View>
                    ),
                })}/>
                 <Stack.Screen name="TelaVerNota" component={TelaVerNota} options={(props)=>({
                    title: 'Voltar',
                    headerStyle:{
                        backgroundColor: '#0F62FE',                
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'IBM Plex Sans',
                    },
                    headerRight: () => ( 
                       <View>
                           <BotaoExcluirNota {...props}/>
                           <BotaoEditarNota {...props}/>
                       </View>
                    ),
                })}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}