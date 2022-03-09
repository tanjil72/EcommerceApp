import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Counter({price}) {
  const [count, setCount] = useState(1);
  const addCountHandler = () => {
    setCount(count + 1);
  };

  const removeCountHandler = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <View style={styles.CounterContainer}>
      <View style={styles.CounterView}>
        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={addCountHandler}
        >
          <Text style={styles.Text}>+</Text>
        </TouchableOpacity>

        <View style={styles.TextContainer}>
          <Text style={styles.CounterText}>{count}</Text>
        </View>

        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={removeCountHandler}
        >
          <Text style={styles.Text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.priceText}>
        <Text>${count>1?count*price:price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CounterContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  priceText: {
    color: "white",
  },
  CounterView: {
    flexDirection: "row",
  },
  CounterText: {
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  TextContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  Text: {
    color: "white",
  },
  priceText: {
    backgroundColor: "white",
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
