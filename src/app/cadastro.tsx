import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-gray-100 items-center"
    >
      {/* Navigation Bar */}
      <View className="bg-white w-full py-2 px-4 flex-row items-center justify-between shadow-md">
        <TouchableOpacity>
          <FontAwesome name="bars" size={20} color="gray" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{ width: 100, height: 40 }}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <FontAwesome name="whatsapp" size={20} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Main Content Container */}
      <View 
        style={{ 
          width: width > 600 ? 450 : '90%', 
          maxWidth: 500,
          flex: 1,
          justifyContent: 'center'
        }} 
        className="bg-white rounded-2xl shadow-lg px-6 py-8 mt-4"
      >
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{ width: 180, height: 180, alignSelf: 'center', marginBottom: 0 }}
          resizeMode="contain"
        />
        <Text className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Criação de conta
        </Text>

        {/* Input Fields */}
        <View className="space-y-3">
          {[
            { label: "Nome", placeholder: "Insira seu Nome" },
            { label: "Sobrenome", placeholder: "Insira seu sobrenome" },
            { label: "CPF", placeholder: "Insira seu CPF" },
            { label: "Data de Nascimento", placeholder: "Insira sua data de nascimento" },
            { label: "Email", placeholder: "Insira seu email" },
            { label: "Confirmar Email", placeholder: "Confirmar seu email" }
          ].map((item, index) => (
            <View key={index}>
              <Text className="text-gray-700 font-bold mb-1">{item.label}</Text>
              <TextInput
                placeholder={item.placeholder}
                placeholderTextColor="#4A5568"
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700"
              />
            </View>
          ))}
        </View>

        {/* Create Account Button */}
        <TouchableOpacity className="bg-blue-600 p-3 rounded-md items-center mt-4 mb-2">
          <Text className="text-white text-base font-semibold">Criar conta</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text className="text-center text-gray-600 text-sm mt-2">
          Já tem conta? <Text className="text-blue-600 font-semibold" onPress={() => router.back()}>Entrar</Text>
        </Text>

        {/* Separator */}
        <View className="flex-row items-center my-3">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-500 text-xs">ou</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Google Sign-Up Button */}
        <TouchableOpacity className="flex-row items-center justify-center bg-white shadow-md rounded-lg p-3">
          <Image
            source={require('../../assets/images/google.png')}
            style={{ width: 20, height: 20, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text className="text-base text-[#0000008A]">Criar conta com Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}