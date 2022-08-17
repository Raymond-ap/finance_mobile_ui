import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Header, RenderCardItem, FeaturedRow, RenderTranscation } from "../../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black">
      <Header />
      <RenderCardItem />
      {/* <FeaturedRow label={"overview"} /> */}
      <FeaturedRow label={"latest transaction"} render={<RenderTranscation/>} />
      <StatusBar style="light" translucent={false} backgroundColor="#000" />
    </SafeAreaView>
  );
}
