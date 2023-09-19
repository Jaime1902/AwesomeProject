import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preguntas</Text>
      {/* Aquí puedes agregar tu lógica y elementos de interfaz de usuario para la pantalla de preguntas */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  // Otros estilos según sea necesario
});
