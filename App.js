import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import LoginScreen from './LoginScreen';
import QuestionScreen from './QuestionScreen';

const Stack = createNativeStackNavigator();

async function checkUserAndNavigate() {
  try {
    // Lee los datos de usuario desde AsyncStorage
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const { username, password } = JSON.parse(userData);
      // Comprueba si los datos son válidos y navega a la pantalla de preguntas
      if (username && password) {
        return 'Question';
      }
    }
  } catch (error) {
    console.error('Error reading user data:', error);
  }
  // Si no hay datos de usuario o son inválidos, navega a la pantalla de inicio de sesión
  return 'Login';
}

function App() {
  const initialRoute = checkUserAndNavigate();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
