// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewDeliveryScreen from './screens/NewDeliveryScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewDelivery" component={NewDeliveryScreen} options={{ title: 'Nova Entrega' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao AGEPT</Text>
      <Button title="Nova Entrega" onPress={() => navigation.navigate('NewDelivery')} />
      <Button title="Histórico de Entregas" onPress={() => navigation.navigate('History')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

// screens/NewDeliveryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';

const NewDeliveryScreen = () => {
  const [delivery, setDelivery] = useState({ cliente: '', endereco: '', produto: '' });

  const handleConfirm = () => {
    Alert.alert('Entrega Salva', `Cliente: ${delivery.cliente}\nEndereço: ${delivery.endereco}\nProduto: ${delivery.produto}`);
    setDelivery({ cliente: '', endereco: '', produto: '' });
  };

  return (
    <View style={styles.container}>
      <Header title="Nova Entrega" />
      <Text style={styles.label}>Cliente</Text>
      <TextInput
        style={styles.input}
        value={delivery.cliente}
        onChangeText={(text) => setDelivery({ ...delivery, cliente: text })}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={delivery.endereco}
        onChangeText={(text) => setDelivery({ ...delivery, endereco: text })}
      />

      <Text style={styles.label}>Produto</Text>
      <TextInput
        style={styles.input}
        value={delivery.produto}
        onChangeText={(text) => setDelivery({ ...delivery, produto: text })}
      />

      <Button title="Salvar Entrega" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
  },
});

export default NewDeliveryScreen;

// screens/HistoryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DeliveryCard from '../components/DeliveryCard';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Histórico de Entregas" />
      <DeliveryCard cliente="João Silva" endereco="Rua A, 123" produto="Celular" />
      <DeliveryCard cliente="Maria Souza" endereco="Av. Central, 456" produto="Livro" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HistoryScreen;

// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;

// components/DeliveryCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeliveryCard = ({ cliente, endereco, produto }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Cliente: {cliente}</Text>
      <Text style={styles.text}>Endereço: {endereco}</Text>
      <Text style={styles.text}>Produto: {produto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
  },
});

export default DeliveryCard;
