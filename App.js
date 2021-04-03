import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight } from 'react-native';

//const {width, height } = Dimensions.get('window');
export default function App() {
  const [text, setText] = useState('');
  const [sibmit, setSibmit] = useState('');
  return (
    <View style={styles.container}>
      <Text>Text: {sibmit}</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Escribe aqui'
        onChangeText={t => setText(t)}
        defaultValue={text}
      />
      <TouchableHighlight
        underlayColor={'#999'}
        onPress={() => {
          setSibmit(text)
          alert('texto enviado con exito')
        }}
      ><Text>Aceptar</Text></TouchableHighlight>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
