import { View, Image, Text, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Header } from '../components/header';
import { useState, useRef } from 'react';
import { useRouter } from 'expo-router';

const statusBarHeight = Constants.statusBarHeight;

export default function Verification() {
    const router = useRouter();
    {/*atualiza apenas o índice que foi digitado, sem apagar os outros*/}
    {/*parte para controlar inputs de numero*/}
    const [code, setCode] = useState(Array(6).fill(''));
    const inputsRef = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
      };
  
    const handleKeyPress = (e: any, index: number) => {
      if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };

  return (
    <View style={{flex: 1}} className="flex-1 bg-[#F6F8FA] style={{ paddingTop: statusBarHeight }}">
      
      {/* Header */}
      <View className="w-full bg-white h-16 px-4">
        <Header />
      </View>

      {/*box conteudo da pagina*/}
      <View className="bg-white mt-24 mx-4 p-6 rounded-xl shadow-md self-center w-full max-w-md">
        <Image 
          source={require('../../assets/images/Logo.png')}
          style={{ width: 150, height: 70, alignSelf: 'center', marginBottom: 20 }} 
          resizeMode="contain"
        />
        
        <Text className="text-[16px] text-center text-[#111111] leading-[24px] mb-8">
            Enviamos um <Text className="font-bold">código de 6 dígitos</Text> para{'\n'}
            co******@gmail.com ou (88) 9.****-8888
        </Text>

        {/*Campos de digitos numericos e sua funcionalidade*/}

        <View className="flex-row justify-between mb-6">
        {code.map((digit, index) => (
            <TextInput
                key={index}
                ref={(ref) => (inputsRef.current[index] = ref)}
                maxLength={1}
                keyboardType="number-pad"
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                className={`w-14 h-16 rounded-lg text-center text-[18px] font-bold bg-white 
                ${digit ? 'border border-[#0047BB] text-[#0047BB]' : 'border border-[#D4D4D8] text-[#111111]'}`}
            />
        ))}
        </View>
        
        <Text className="text-center text-[14px] text-[#111111] leading-[22px] mb-6">
            Não recebeu? Lembre-se de verificar o <Text className="font-semibold">SPAM</Text>.
        </Text>
        
        <Pressable onPress={() => console.log('Código reenviado')}>
            <Text className="text-xl text-[#0047BB] font-semibold text-center">
                Reenviar código
            </Text>
        </Pressable>

        <Pressable
            disabled={!code.every((digit) => digit.trim() !== '')}
            onPress={() => console.log('Código confirmado')}
            className={`h-16 rounded-lg justify-center items-center mt-14 ${
                code.every((digit) => digit.trim() !== '')
                ? 'bg-[#0047BB]'
                : ' bg-slate-50'
            }`}
            >
            <Text
                className={`text-lg font-semibold ${
                code.every((digit) => digit.trim() !== '') ? 'text-white' : 'text-[#A1A1AA]'
                }`}
            >
                Confirmar código e entrar
            </Text>
        </Pressable>
        
        <Pressable onPress={() => router.back()} className="mt-6">
            <Text className="text-center font-bold text-[16px] text-[#111111]">Voltar</Text>
        </Pressable>

      </View>

    </View>
  );
}
