import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import CardItem from "./CardItem";
import { Cards } from "../constants";

const RenderCardItem = () => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
      }}
      className="py-5"
    >
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Cards}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CardItem index={index} item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default RenderCardItem;
