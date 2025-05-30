import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const deliveries = [
  { id: '1', title: 'Entrega 1', address: 'Av. Interlagos, 1500 - Apto 50', status: 'Pendente' },
  { id: '2', title: 'Entrega 2', address: 'Av. São Paulo, 100', status: 'Pendente' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Remessas</Text>
      <FlatList
        data={deliveries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  item: { marginTop: 10, padding: 10, backgroundColor: '#eee', borderRadius: 8 }
});
