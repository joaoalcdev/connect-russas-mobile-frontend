import { View, Pressable, Image } from 'react-native';
import {Ionicons, FontAwesome } from '@expo/vector-icons';

export function Header() {
 return (
   <View className="flex-row items-center justify-between w-full h-full px-4">
        <Pressable>
            <Ionicons name='menu' size={24} color={"#0047BB"} />
        </Pressable>

        {/* Logo */}
        <View className="absolute left-1/2 -translate-x-1/2">
            <Image 
            source={require('../../../assets/images/Logo.png')} // Verifique o caminho exato da sua imagem
            style={{ width: 100, height: 40 }} // Ajuste conforme necessário
            resizeMode="contain" 
            />
        </View>

        {/* Ícone do WhatsApp */}
        <Pressable>
            <FontAwesome name="whatsapp" size={24} color={"#0047BB"} /> 
        </Pressable>

   </View>

  );
}