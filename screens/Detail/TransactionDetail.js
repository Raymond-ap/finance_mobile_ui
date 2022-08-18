import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Transactions } from "../../constants";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function TransactionDetail({ route }) {
  const item = route.params.item;
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderChart amount={item.amount} />
        <TransactionHistory />
      </ScrollView>
      <StatusBar style="light" translucent={false} backgroundColor="#000" />
    </SafeAreaView>
  );
}

const RenderChart = ({ amount }) => {
  return (
    <View className="my-3">
      <Text className="px-4 text-gray-300 text-base mb-1 capitalize tracking-wider">
        total expense
      </Text>
      <Text className="px-4 text-white text-xl font-bold capitalize tracking-widest mb-5">
        {amount}
      </Text>
      <LineChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        yAxisInterval={1}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForBackgroundLines: {
            strokeWidth: 0,
          },
          propsForDots: {
            stroke: "#ccfbf1",
          },
        }}
        withHorizontalLabels={false}
        style={{ paddingRight: 0 }}
        bezier
      />
    </View>
  );
};

const SearchItem = () => {
  return (
    <View className="flex px-5 flex-row items-center bg-neutral-800 rounded-full border border-neutral-50">
      <Ionicons name="search" color={"#e5e7eb"} size={18} />
      <TextInput
        style={{ flex: 1, color: "#e5e7eb" }}
        placeholder="Search your transaction here"
        placeholderTextColor={"#e5e7eb"}
        className="text-base w-full px-2 py-3"
      />
    </View>
  );
};

const TransactionHistory = () => {
  const navigation = useNavigation();
  return (
    <View className="mx-4">
      <Text className="text-xl font-bold capitalize text-white tracking-wider mb-3">
        History Transaction
      </Text>
      <View className="my-3">
        <SearchItem />
      </View>
      <View>
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
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-black px-4 py-3 flex flex-row items-center justify-between">
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" color={"#fff"} size={25} />
      </TouchableOpacity>
      <Text className="text-xl capitalize text-white tracking-widest">
        statistic
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <MaterialCommunityIcons name="dots-vertical" color={"#fff"} size={25} />
      </TouchableOpacity>
    </View>
  );
};
