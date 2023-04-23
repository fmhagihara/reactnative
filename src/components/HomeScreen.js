import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';


function HomeScreen({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Ir para galeria!"
                onPress={() => navigation.navigate('Home2')}
            />
            <Button
                title="Cálculo de média"
                onPress={() => navigation.navigate('Média')}
            />
            <Button
                title="Pesquisar filme"
                onPress={() => navigation.navigate('Filme')}
            />
        </View>

    );
}

export default HomeScreen;
