import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])
  const [loeading, setLoeading] = useState(true)

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoeading(false)
      })
  }, [])

  if(loeading){
    return <View style={styles.center}><Text>Cargando...</Text></View>
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
