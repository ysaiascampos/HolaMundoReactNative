import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Modal,Text, View, Button } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title="Cerrar modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>

      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>
      <Text>NO soy un modal</Text>
      <Button title="Abrir modal" onPress={() => setModal(!modal)} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
