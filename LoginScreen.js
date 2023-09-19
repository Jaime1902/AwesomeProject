import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // Aquí deberías realizar la solicitud HTTP para enviar los datos al servidor
    fetch('http://192.168.101.10:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: usuario,
        contrasena: contrasena,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Inicio de sesión exitoso') {
        // Manejar inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        navigation.navigate('Question');
        
        // Redirigir a otra pantalla o realizar otras acciones
      } else {
        // Manejar otro tipo de respuesta (por ejemplo, credenciales inválidas)
        console.log('Credenciales inválidas');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        keyboardType="default"
        value={usuario}
        onChangeText={text => setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={text => setContrasena(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
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
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      padding: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
  });