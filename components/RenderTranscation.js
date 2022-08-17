import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Transactions } from "../constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
  FontAwesome5Brands,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RenderTranscation() {
  const navigation = useNavigation();
  return (
    <View className="mx-4">
      {Transactions.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TransactionDetail", { item: item })
            }
            activeOpacity={0.8}
            className="my-2 flex flex-row py-3 items-center justify-between"
            key={index}
          >
            <View
              className={`w-12 justify-center items-center h-12 rounded-full ${
                index % 3 === 1 ? "bg-teal-200" : "bg-neutral-800"
              }`}
            >
              <FontAwesome
                name={item.vectorName}
                size={20}
                color={index % 3 === 1 ? "#262626" : "#ccfbf1"}
              />
            </View>
            <View style={{ flex: 1 }} className="mx-3">
              <View className="flex flex-row items-center">
                <Text className="text-white font-bold capitalize text-base tracking-wider">
                  {item.title}
                </Text>
                {item.accountType && (
                  <Text className="bg-amber-200 text-black px-1 py-0.5 mx-1 rounded-lg capitalize text-xs tracking-wider">
                    {item.accountType}
                  </Text>
                )}
              </View>
              <Text className="text-gray-200 capitalize text-sm tracking-wider">
                {item.date}
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons
                name={item.type === "inc" ? "plus" : "minus"}
                size={15}
                color={item.type === "inc" ? "#059669" : "#dc2626"}
              />
              <Text
                className={`text-sm font-bold ${
                  item.type === "inc" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.amount}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
