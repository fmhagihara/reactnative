import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/components/Main';
import HomeScreen from './src/components/HomeScreen';
import Home2 from './src/components/Home2';
import Filme from './src/components/Filme';
import DetalheFilme from './src/components/DetalheFilme';

const Stack = createStackNavigator();


export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Média" component={Main} />
        <Stack.Screen name="Filme" component={Filme} />
        <Stack.Screen name="DetalheFilme" component={DetalheFilme} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
