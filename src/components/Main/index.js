import { TextInput, Text, View, Button, Vibration, Share, TouchableOpacity} from 'react-native';
import React, { useState } from 'react'


export default function Main () {

    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    let [media, setMedia] = useState(null);

    function calculoMedia() {
        const resultado = ((parseInt(nota1)+parseInt(nota2))/2).toFixed(2);
        Vibration.vibrate();
        setMedia(resultado); 
    }

    const onShare = async() => {
        const result = await Share.share( {
            message: "A media eh: " + media,
        })
    }

    return (

        <View>
            <Text>Cálculo da média do aluno</Text>
            <Text>Prova 1:</Text>
            <TextInput 
                placeholder="Ex: 8.5" 
                keyboardType="numeric" 
                value={nota1}
                onChangeText={ (valor) => setNota1(valor) } />
            <Text>Prova 2:</Text>
            <TextInput 
                placeholder="Ex: 8.5" 
                keyboardType="numeric" 
                value={nota2}
                onChangeText={ (valor) => setNota2(valor) } />
            <Button title="Calcular média" onPress={calculoMedia}></Button>
            <View>
            <Text>Resultado: {media}</Text>
            { media != null ?
            <TouchableOpacity onPress={onShare}>                
                <Text>Share</Text>
            </TouchableOpacity> 
            : <View />
            }
            </View>
        </View>
        
    );
}
