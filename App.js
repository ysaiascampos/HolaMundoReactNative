import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableWithoutFeedback } from 'react-native';

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
      <TouchableWithoutFeedback
        style={styles.TouchableOpacity}
        onPress={() => {
          setSibmit(text)
          alert('texto enviado con exito')
        }}
      ><View style={styles.view}>
          <Text>Aceptar</Text>
        </View></TouchableWithoutFeedback>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: '#EEE'
  },
  view: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 0.5,
  },
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
