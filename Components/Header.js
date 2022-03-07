import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.Header}>Let's Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: 'underline'
    
  },
});
