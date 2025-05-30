import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function NewDeliveryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Entrega</Text>
      <TextInput placeholder="Descrição" style={styles.input} />
      <TextInput placeholder="Endereço Retirada" style={styles.input} />
      <TextInput placeholder="Endereço Entrega" style={styles.input} />
      <TextInput placeholder="Valor Oferecido" style={styles.input} keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  input: { marginTop: 10, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: '#ccc' }
});
