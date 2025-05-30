import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NewDeliveryScreen from './screens/NewDeliveryScreen';
import HistoryScreen from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Remessas" component={HomeScreen} />
        <Tab.Screen name="Fazer Entregas" component={NewDeliveryScreen} />
        <Tab.Screen name="Histórico" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
