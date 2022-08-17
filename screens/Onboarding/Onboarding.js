import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-black" style={{ flex: 1 }}>
      <View className="px-5 w-full flex justify-end h-full pb-5">
        <Text className="text-white w-56 capitalize leading-10 font-bold text-2xl tracking-wider mb-2">
          Manage your finances with a simple card
        </Text>
        <Text className="text-gray-300 text-base">
          Have this card and start managing your daily expenses to get a more
          organized future.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="mt-10 w-full bg-teal-100 py-4 justify-center items-center rounded-md shadow-md"
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold capitalize tracking-wider ">
            get started now
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" translucent={false} backgroundColor="#000" />
    </SafeAreaView>
  );
}
