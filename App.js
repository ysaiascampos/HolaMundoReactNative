import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
const crearDialogo = () => Alert.alert('Titulo', 
'Subtitulo o mensaje que podemos agregar',
[
  {
    text: 'Cancelar',
    onPress: () => {},
    style: "cancel",
  },
  {
    text: 'Aceptar',
    onPress: () => console.log('Boton presionado'),
  },
  {
    cancelable: false,
  }
]
)
export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Abrir dialogo" onPress={crearDialogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
