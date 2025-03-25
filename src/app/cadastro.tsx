import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="items-center mb-4">
        <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} className="w-16 h-16" />
        <Text className="text-2xl font-bold text-blue-600 mt-2">TailGrids</Text>
      </View>

      <View className="bg-white p-6 rounded-xl shadow-md">
        <Text className="text-xl font-semibold text-gray-800 mb-4">Criação de conta</Text>

        {/* Campos de entrada */}
        {["Nome", "Sobrenome", "CPF", "Data de nascimento", "Email", "Confirmar Email"].map((placeholder, index) => (
          <TextInput
            key={index}
            placeholder={placeholder}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />
        ))}

        {/* Botão Criar Conta */}
        <TouchableOpacity className="bg-blue-600 p-3 rounded-lg items-center">
          <Text className="text-white text-lg font-semibold">Criar conta</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Já tem conta?</Text>
          <Pressable onPress={() => router.push('../')}>
            <Text className="text-blue-600 ml-1">Entrar</Text>
          </Pressable>
        </View>

        {/* Linha Divisória */}
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-2 text-gray-500">ou</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        {/* Botão Login com Google */}
        <TouchableOpacity className="border border-gray-300 p-3 rounded-lg flex-row items-center justify-center">
          {/* Substituímos className por style */}
          <FontAwesome name="google" size={20} color="red" style={{ marginRight: 8 }} />
          <Text className="text-gray-800 text-lg">Criar conta com Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
