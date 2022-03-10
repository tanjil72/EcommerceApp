import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../redux/actions";

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
