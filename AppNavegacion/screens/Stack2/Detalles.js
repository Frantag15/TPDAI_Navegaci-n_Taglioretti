import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/shared';

export default function Detalles() {
  return (
    <View style={[styles.container, { backgroundColor: '#E6FFE6' }]}>
      <Text style={styles.text}>Opciones avanzadas</Text>
    </View>
  );
}
