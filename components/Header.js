import { View, Text, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between py-4 px-5">
      <View>
        <Text className="text-white text-xl capitalize font-bold tracking-wider">
          Hi James
        </Text>
        <Text className="text-gray-200 capitalize text-sm tracking-wider">
          welcome Back
        </Text>
      </View>
      <Image
        resizeMode="cover"
        source={require("../assets/images/profile.jpg")}
        className="w-12 h-12 rounded-full object-cover"
      />
    </View>
  );
}
