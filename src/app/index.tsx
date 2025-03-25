import { Text, View, Image, TextInput, Pressable } from "react-native";
import { Header } from "../components/header";
import  Constants from 'expo-constants'
import { useRouter } from 'expo-router';


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();

  return (
    <View style={{flex: 1}} className="flex-1 bg-[#F6F8FA] style={{ paddingTop: statusBarHeight }}">

      <View className="w-full px-4 bg-[#FEFEFF] h-16 style={{ paddingTop: statusBarHeight }}" >
        <Header/>
      </View>

      {/*box conteudo da pagina*/}
      <View className="bg-white mt-24 mx-4 p-6 rounded-xl shadow-md self-center w-full max-w-md">
        <Image 
              source={require('../../assets/images/Logo.png')}
              style={{ width: 150, height: 70, alignSelf: 'center', marginBottom: 20 }} 
              resizeMode="contain"
        />

        <Text className="text-[20px] font-extrabold text-center text-[#111111] leading-[26px] mb-10">
          Entrar no Cidadão Connect
        </Text>

        <Text className="text-[18px] font-bold text-[#111111] mb-3">
          Email
        </Text>

        <TextInput
          placeholder="Insira seu email"
          placeholderTextColor="#A1A1AA"
          className="w-full h-14 px-6 rounded-lg border border-[#E4E4E7] bg-white text-[#111111] text-[16px]"
        />

        {/*botao proximo*/}
        <Pressable className="bg-[#0047BB] h-16 rounded-lg justify-center items-center mt-4"
        onPress={() => router.push('../Verification')}>
          <Text className="text-white font-semibold text-[18px]">Próximo</Text>
        </Pressable>
        
        {/*caso não tenha conta - criar conta*/}
        <View className="flex-row justify-center mt-6">
          <Text className="text-[18px] text-[#111111] font-bold">Não tem conta? </Text>
          <Pressable onPress={() => router.push('../cadastro')}>
            <Text className="text-[18px] font-semibold text-[#00358C]">Criar conta</Text>
          </Pressable>
        </View>
 
        {/*login google*/}
        <View className="flex-row items-center mt-10">
          <View className="flex-1 h-px bg-[#5C5C5C38]" />
          <Text className="mx-4 text-lg text-[#5C5C5C]">ou</Text>
          <View className="flex-1 h-px bg-[#5C5C5C38]" />
        </View>

        <Pressable className="flex-row items-center justify-center h-16 rounded-lg bg-white shadow-md mt-6 mb-4">
          <Image
            source={require('../../assets/images/google.png')}
            style={{ width: 20, height: 20, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text className="text-lg text-[#0000008A]">Login com Google</Text>
        </Pressable>
        
              
      </View>

    </View>
  );
}
