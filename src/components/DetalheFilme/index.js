import { Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import tmdb from '../../api/tmdb';
import styles from '../style';

export default function DetalheFilme(props) {
    const id = props.route.params.idbusca;
    //console.log(id);

    let [descricao, setDescricao] = useState("");
    let [poster, setPoster] = useState("");

    useEffect(() => {
        async function getDados() {
            try {
                const resultado = await tmdb.get('/movie/'.concat(id));
                setDescricao(resultado.data.overview);
                setPoster("https://image.tmdb.org/t/p/original".concat(resultado.data.poster_path));
                console.log(poster);
            } catch (error) {
                alert("Ocorreu um erro ao buscar os dados do filme");
                //console.log(error);
            }
        }
        getDados();
    }, []);


    

    //setTextoLista(textoLista);


    return (
        <View>
            <View>
                <Text>{descricao}</Text>

                <Image style={styles.Image}
                    src={poster} />
            </View>
        </View>
    )
}
