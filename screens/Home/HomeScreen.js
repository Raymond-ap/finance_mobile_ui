import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  Header,
  RenderCardItem,
  FeaturedRow,
  RenderTranscation,
  RenderOverview
} from "../../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black">
      <Header />
      <ScrollView>
        <RenderCardItem />
        <FeaturedRow label={"overview"} render={<RenderOverview/>} />
        <FeaturedRow
          label={"latest transaction"}
          render={<RenderTranscation />}
        />
      </ScrollView>
      <StatusBar style="light" translucent={false} backgroundColor="#000" />
    </SafeAreaView>
  );
}
