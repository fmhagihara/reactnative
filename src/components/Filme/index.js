import { TextInput, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tmdb from '../../api/tmdb';


export default function Filme( {navigation} ) {

    const [procura, setProcura] = useState(null);
    let [lista, setLista] = useState([]);


    async function buscaFilme() {
        const resultado = await tmdb.get('search/movie', {
            params: {
                query: procura,
                include_adult: false
            }
        });
        //console.log(resultado);
        setLista(resultado.data.results);

       
    }

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Pesquisar filme"
                    value={procura}
                    onChangeText={(valor) => setProcura(valor)} />
                <Button title="->" onPress={buscaFilme}></Button>
            </View>
            <View>
                
                {lista.map(element => 
                    <Text key={element.id} onPress={() => navigation.navigate('DetalheFilme', { idbusca: element.id})}>
                        {element.id+" - "+element.original_title}</Text>
                )}
                
            </View>
        </View>
    )
}
