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
    
      <View style={styles.CounterView}>
        <Text style={{color:'black',fontWeight:'bold',paddingLeft:10,fontSize:20}}>${item.price}</Text>
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
    backgroundColor:'#7f8fa6',

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
    flexDirection: "row",
  },
  CounterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    padding:5
  },
  Text: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
