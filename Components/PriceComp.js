import React from "react";
import { StyleSheet,TouchableOpacity,Text } from "react-native";

export default function PriceComp() {
  return (
    <TouchableOpacity
      onPress={() => console.log("Added to Cart")}
      style={styles.AddToCart}
    >
      <Text style={{ color: "white" }}>100</Text>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
    AddToCart: {
        backgroundColor: "black",
        width: 70,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      },
})