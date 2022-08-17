import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'

export default function CardItem({ item, index }) {
  return (
    <View>
      {index === 0 ? (
        <View className="flex flex-row gap-2">
          <TouchableOpacity activeOpacity={0.8} className={`py-4 px-2 justify-center bg-neutral-800 rounded-lg mx-2 h-44`}>
          <Ionicons name="add" color={"#fff"} size={30} />
          </TouchableOpacity>
          <View className={`py-2 px-5 bg-green-200 w-72 rounded-lg mx-1 h-44`}>
            <View className="flex flex-row items-center justify-between">
              <Text className="font-bold capitalize text-base">
                {item.type}
              </Text>
              <Image
                resizeMode="cover"
                source={item.logo}
                className="w-10 h-10 object-cover"
              />
            </View>
            <View className="pt-4">
              <Text className="text-xs capitalize font-bold">balance</Text>
              <Text className="text-2xl font-bold capitalize tracking-wider">
                {item.balance}
              </Text>
              <View className="mt-2 flex flex-row justify-between items-center">
                <Text className="text-base tracking-widest capitalize font-bold">
                  {item.number}
                </Text>
                <View>
                  <Text className="text-xs capitalize font-semibold">
                    valid unit
                  </Text>
                  <Text className="text-sm capitalize font-bold">
                    {item.ccv}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View className={`py-2 px-5 bg-neutral-800 w-72 rounded-lg mx-2 h-44`}>
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-white capitalize text-base">
              {item.type}
            </Text>
            <Image
              resizeMode="cover"
              source={item.logo}
              className="w-10 h-10 object-cover"
            />
          </View>
          <View className="pt-4">
            <Text className="text-white text-xs capitalize font-bold">
              balance
            </Text>
            <Text className="text-white text-2xl font-bold capitalize tracking-wider">
              {item.balance}
            </Text>
            <View className="mt-2 flex flex-row justify-between items-center">
              <Text className="text-white text-base tracking-widest capitalize font-bold">
                {item.number}
              </Text>
              <View>
                <Text className="text-white text-xs capitalize font-semibold">
                  valid unit
                </Text>
                <Text className="text-white text-sm capitalize font-bold">
                  {item.ccv}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
