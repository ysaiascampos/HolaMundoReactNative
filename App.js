import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

//const {width, height } = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola mundo!</Text>
      <TextInput style={styles.input} placeholder='Escribe aqui' />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
