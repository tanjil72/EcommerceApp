import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart,countTotalPrice } from "../redux/actions";

export default function BottomComp({ item }) {

  const dispatch = useDispatch();

  const handleCart = (item) => {
    let quantity=1;
    let total={...item,quantity}
    dispatch(AddToCart(total));
    // dispatch(countTotalPrice(total))
    alert("Added to Cart");
  };

  return (
    <View style={styles.BottomButtonView} key={item}>
      <View style={styles.CounterView}>
        <View style={styles.AddToCart}>
          <Text style={styles.Text}>$ {item.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => { handleCart(item)}}
        style={styles.AddToCart}
      >
        <Text style={styles.Text}>Add To</Text>
        <MaterialCommunityIcons name="cart" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomButtonView: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingLeft: 5,
  },
  ButtonContainer: {
    backgroundColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  AddToCart: {
    backgroundColor: "black",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 5,
    flexDirection: "row",
  },
  CounterView: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
