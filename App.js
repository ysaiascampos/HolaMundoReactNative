import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


export default function App() {
  const [locacion, setLocacion] = useState({});
  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if(status !== 'granted') {
      return Alert.alert('No tenemos los permisos necesarios para acceder a la location');
    }
    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setLocacion(location);
  }
  useEffect(() => {
    buscaLocation()
  },[])
  return (
    <View style={styles.container}>
      <MapView style={styles.maps} >
        {locacion.coords?
        <Marker 
          coordinate={locacion.coords}
          title="Titulo"
          description="Descripcion del punto"
        />
        : null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  maps: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
