import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/shared';

export default function Inicio({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#FFE6F7' }]}>
      <Text style={styles.text}>Pantalla de contacto</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Detalles')}
      >
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
}
