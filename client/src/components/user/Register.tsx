import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    Alert.alert('Registro exitoso', `Bienvenida, ${name}`);
  };

  return (
    <View className='flex flex-col w-full h-full justify-center items-center bg-gray-100 p-4'>
      <Text className='text-3xl font-bold text-gray-800 mb-2'>Regístrate</Text>
      <Text className='text-gray-600 mb-4'>Crea una nueva cuenta</Text>

      <View className='flex flex-col w-full max-w-xl'>
        <Text className='w-full mb-1 text-gray-700'>Nombre</Text>
        <TextInput
          className='w-full bg-white p-3 mb-4 border border-gray-300 rounded-lg'
          placeholder='Tu nombre'
          value={name}
          onChangeText={setName}
        />

        <Text className='w-full mb-1 text-gray-700'>Correo</Text>
        <TextInput
          className='w-full bg-white p-3 mb-4 border border-gray-300 rounded-lg'
          placeholder='user@example.com'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Text className='w-full mb-1 text-gray-700'>Contraseña</Text>
        <TextInput
          className='w-full bg-white p-3 mb-4 border border-gray-300 rounded-lg'
          placeholder='Mínimo 1 número y 1 mayúscula'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text className='w-full mb-1 text-gray-700'>Confirmar Contraseña</Text>
        <TextInput
          className='w-full bg-white p-3 mb-2 border border-gray-300 rounded-lg'
          placeholder='Repite tu contraseña'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className='w-full max-w-xl bg-green-500 p-3 rounded-lg mb-2'
        onPress={handleRegister}
      >
        <Text className='text-white text-center font-bold'>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Alert.alert('Login', 'Redirigir a pantalla de inicio de sesión')
        }
      >
        <Text className='text-blue-500 text-sm mt-2'>
          ¿Ya tienes cuenta? <Text className='font-bold'>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>

      <StatusBar style='dark' />
    </View>
  );
};
