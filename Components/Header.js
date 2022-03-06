import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Let's Shop
      </Text>
    </View>
  );
}
