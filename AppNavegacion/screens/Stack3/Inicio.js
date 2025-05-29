import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/shared';

export default function Inicio({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: '#E6F7FF' }]}>
      <Text style={styles.text}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
      <Text style={styles.text}>Teléfono:</Text>
      <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Detalles', { nombre, telefono })}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
