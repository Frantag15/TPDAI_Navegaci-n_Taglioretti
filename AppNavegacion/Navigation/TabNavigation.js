import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stack1Navigator from './Stack1Navigator';
import Stack2Navigator from './Stack2Navigator';
import Stack3Navigator from './Stack3Navigator';
import Stack4Navigator from './Stack4Navigator';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Datos: 'person',
            Imagen: 'image',
            Config: 'settings',
            Contacto: 'call'
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Datos" component={Stack1Navigator} />
      <Tab.Screen name="Imagen" component={Stack2Navigator} />
      <Tab.Screen name="Config" component={Stack3Navigator} />
      <Tab.Screen name="Contacto" component={Stack4Navigator} />
    </Tab.Navigator>
  );
}
