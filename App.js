import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground,Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{
          uri: 'https://placekitten.com/200/200'
        }}
      >
        <Text>hola sss</Text>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
