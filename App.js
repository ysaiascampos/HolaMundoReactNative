import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={[
          { key: '1', name: 'Amargado' },
          { key: '2', name: 'Feliz' },
          { key: '3', name: 'triste' },
          { key: '4', name: 'amoroso' },
          { key: '5', name: 'molesto' },
          { key: '6', name: 'Amargado' },
          { key: '7', name: 'Feliz' },
          { key: '8', name: 'triste' },
          { key: '9', name: 'amoroso' },
          { key: '10', name: 'molesto' },
          { key: '11', name: 'Amargado' },
          { key: '12', name: 'Feliz' },
          { key: '13', name: 'triste' },
          { key: '14', name: 'amoroso' },
          { key: '15', name: 'molesto' },

        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
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
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,

  },
});
