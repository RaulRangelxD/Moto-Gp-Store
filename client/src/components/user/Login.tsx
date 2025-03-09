import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    Alert.alert('Inicio de sesión', `Correo: ${email}`);
  };

  return (
    <View className='flex flex-col w-full h-full justify-center items-center bg-gray-100 p-4'>
      <Text className='text-3xl font-bold text-gray-800 mb-2'>Bienvenido</Text>
      <Text className='text-gray-600 mb-4'>Ingresa tu cuenta</Text>

      <View className='flex flex-col w-full max-w-xl'>
        <Text className='w-full mb-1 text-gray-700'>Correo</Text>
        <TextInput
          className='w-full bg-white p-3 mb-4 border border-gray-300 rounded-lg'
          placeholder='user_example@gmail.com'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
          onSubmitEditing={() => passwordInput.focus()}
        />

        <Text className='w-full mb-1 text-gray-700'>Contraseña</Text>
        <TextInput
          className='w-full bg-white p-3 mb-2 border border-gray-300 rounded-lg'
          placeholder='Mínimo 1 número y 1 mayúscula'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          ref={(input) => (passwordInput = input)}
          onSubmitEditing={handleSubmit}
        />
      </View>

      <TouchableOpacity
        className='w-full max-w-xl bg-blue-500 p-3 rounded-lg mb-2'
        onPress={handleSubmit}
      >
        <Text className='text-white text-center font-bold'>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Alert.alert('Recuperación', 'Redirigir a recuperación de contraseña')
        }
      >
        <Text className='text-blue-500 text-sm'>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Alert.alert('Registro', 'Redirigir a pantalla de registro')
        }
      >
        <Text className='text-blue-500 text-sm mt-2'>
          ¿Aún no tienes perfil? <Text className='font-bold'>Regístrate</Text>
        </Text>
      </TouchableOpacity>

      <StatusBar style='dark' />
    </View>
  );
};
