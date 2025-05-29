import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/shared';

export default function Inicio({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#E6FFE6' }]}>
      <Text style={styles.text}>Configuración rápida</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Detalles')}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}
