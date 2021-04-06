import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';


export default function App() {
  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back)
  const getPermisos = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setPermisos(status == 'granted')
    console.log(status);
  }
  useEffect(() => {
    getPermisos()
  })

  if(permisos === null) {
    return <View style={styles.container}>
      <Text>Esperando permisos...</Text>
    </View>
  }
  if(permisos === false) {
    return <View style={styles.container}>
      <Text>No tenemos acceso a la camara</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo}>
        
        <Button 
          title="Voltear"
          onPress={() => {
            const { front, back } = Camera.Constants.Type
            const nuevoTipo = tipo === back ? front : back
            setTipo(nuevoTipo)
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
