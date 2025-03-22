import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styled } from "nativewind";


import { FontAwesome } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

export default function Cadastro() {
  return (
    <StyledScrollView className="flex-1 bg-gray-100 p-4">
      <StyledView className="items-center mb-4">
        <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} className="w-16 h-16" />
        <StyledText className="text-2xl font-bold text-blue-600 mt-2">TailGrids</StyledText>
      </StyledView>

      <StyledView className="bg-white p-6 rounded-xl shadow-md">
        <StyledText className="text-xl font-semibold text-gray-800 mb-4">Criação de conta</StyledText>

        {/* Campos de entrada */}
        {["Nome", "Sobrenome", "CPF", "Data de nascimento", "Email", "Confirmar Email"].map((placeholder, index) => (
          <StyledTextInput
            key={index}
            placeholder={placeholder}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />
        ))}

        {/* Botão Criar Conta */}
        <StyledTouchableOpacity className="bg-blue-600 p-3 rounded-lg items-center">
          <StyledText className="text-white text-lg font-semibold">Criar conta</StyledText>
        </StyledTouchableOpacity>

        <StyledView className="flex-row justify-center mt-4">
          <StyledText className="text-gray-600">Já tem conta?</StyledText>
          <TouchableOpacity>
            <StyledText className="text-blue-600 ml-1">Entrar</StyledText>
          </TouchableOpacity>
        </StyledView>

        {/* Linha Divisória */}
        <StyledView className="flex-row items-center my-4">
          <StyledView className="flex-1 h-[1px] bg-gray-300" />
          <StyledText className="mx-2 text-gray-500">ou</StyledText>
          <StyledView className="flex-1 h-[1px] bg-gray-300" />
        </StyledView>

        {/* Botão Login com Google */}
        <StyledTouchableOpacity className="border border-gray-300 p-3 rounded-lg flex-row items-center justify-center">
          <FontAwesome name="google" size={20} color="red" className="mr-2" />
          <StyledText className="text-gray-800 text-lg">Criar conta com Google</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledScrollView>
  );
}
