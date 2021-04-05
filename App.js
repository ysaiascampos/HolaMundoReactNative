import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


export default function App() {
  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if(status !== 'granted') {
      return Alert.alert('No tenemos los permisos necesarios para acceder a la location');
    }

    const location = await Location.getCurrentPositionAsync({accuracy: 6})
    console.log(location);
  }
  useEffect(() => {
    buscaLocation()
  })
  return (
    <View style={styles.container}>
      <Text>hola</Text>
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
