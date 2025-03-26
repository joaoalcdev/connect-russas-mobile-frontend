import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Barra de navegação */}
      <View className="bg-white py-4 px-6 flex-row items-center justify-between shadow-md">
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="gray" />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Image
            source={require('../../assets/images/Logo.png')}
            style={{ width: 80, height: 25, alignSelf: 'center', marginBottom: 0 }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity>
          <FontAwesome name="whatsapp" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      <View className="items-center my-6"></View>

      <View className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{ width: 150, height: 70, alignSelf: 'center', marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text className="text-xl font-semibold text-gray-800 mb-6 text-center">Criação de conta</Text>

        {/* Campos de entrada */}
        {[
  { label: "Nome", placeholder: "Insira seu Nome" },
  { label: "Sobrenome", placeholder: "Insira seu sobrenome" },
  { label: "CPF", placeholder: "Insira seu CPF" },
  { label: "Data de Nascimento", placeholder: "Insira sua data de nascimento" },
  { label: "Email", placeholder: "Insira seu email" },
  { label: "Confirmar Email", placeholder: "Confirmar seu email" }
].map((item, index) => (
  <View key={index} className="mb-4">
    <Text className="text-gray-700 font-bold mb-1">{item.label}</Text> 
    <TextInput
      placeholder={item.placeholder}
      placeholderTextColor="#4A5568"
      className="border border-gray-300 rounded-md px-4 py-3 bg-white text-gray-700"
    />
  </View>
))}


        {/* Botão Criar Conta */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-md items-center mb-4 shadow-md">
          <Text className="text-white text-lg font-semibold">Criar conta</Text>
        </TouchableOpacity>

        {/* Link para login */}
        <Text className="text-center text-gray-600">Já tem conta? <Text className="text-blue-600 font-semibold" onPress={() => router.back()}>Entrar</Text></Text>

        {/* Separador */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">ou</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Botão Criar Conta com Google */}
        <TouchableOpacity className="flex-row items-center justify-center h-16 rounded-lg bg-white shadow-md mt-6 mb-4">
        <Image
            source={require('../../assets/images/google.png')}
            style={{ width: 20, height: 20, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text className="text-lg text-[#0000008A]">Criar conta com Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
