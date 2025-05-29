import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/shared';

export default function Detalles() {
  return (
    <View style={[styles.container, { backgroundColor: '#FFE6F7' }]}>
      <Text style={styles.text}>Formulario de contacto o mapa</Text>
    </View>
  );
}
