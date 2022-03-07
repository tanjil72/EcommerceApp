import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function BottomComp({ i,price }) {
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(count + 1);
  };

  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <View style={styles.BottomButtonView} key={i}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          key={i}
          style={styles.ButtonContainer}
          onPress={addCountHandler}
        >
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>

        <Text style={{ padding: 10 }}>{count}</Text>

        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={removeCountHandler}
        >
          <Text style={{ color: "white" }}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Added to Cart")}
        style={styles.AddToCart}
      >
        <Text style={{ color: "white" }}>{count==0?price:price*count}</Text>
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
    width: 70,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
