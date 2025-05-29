import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/shared';

export default function Detalles({ route }) {
  const { nombre, telefono } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: '#E6F7FF' }]}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
    </View>
  );
}
