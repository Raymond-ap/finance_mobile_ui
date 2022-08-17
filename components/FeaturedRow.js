import { View, Text } from "react-native";
import React from "react";

export default function FeaturedRow({ label, render }) {
  return (
    <View className="my-2">
      <View className="px-4">
        <Text className="text-lg font-bold capitalize text-white tracking-wider mb-3">
          {label}
        </Text>
      </View>
      {render}
    </View>
  );
}
