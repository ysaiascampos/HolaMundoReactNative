import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size="small"
        color="#0000FF"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
