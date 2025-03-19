import { Text, View } from "react-native";
import { Header } from "../components/header";
import  Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <View style={{flex: 1}} className="bg-slate-50">

      <View className="w-full px-4 bg-white h-16 wstyle={{ paddingTop: statusBarHeight }}" >
        <Header/>
      </View>

    </View>
  );
}
