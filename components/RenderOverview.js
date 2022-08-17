import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Overview } from "../constants";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RenderOverview() {
  return (
    <View
      className="py-2"
      style={{
        width: Dimensions.get("screen").width,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Overview}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
}

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("TransactionDetail", { item: item })}
      className="bg-neutral-800 rounded-lg w-56 shadow-lg mx-1 py-5 px-4"
    >
      <Text className="text-gray-300 text-lg font-bold capitalize tracking-wider">
        {item.label}
      </Text>
      <Text className="mt-5 text-white text-xl font-bold capitalize tracking-widest">
        {item.amount}
      </Text>
      <View className="flex flex-row items-center justify-between mt-2">
        <View className="flex flex-row items-center">
          <Feather
            name={item.type === "inc" ? "arrow-up-right" : "arrow-down-right"}
            color={item.type === "inc" ? "#059669" : "#dc2626"}
            size={15}
          />
          <Text
            className={`ml-1 text-sm font-bold ${
              item.type === "inc" ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.percentage}
          </Text>
        </View>
        <Text className={`ml-1 text-sm text-gray-300`}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};
