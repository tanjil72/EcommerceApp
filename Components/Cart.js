import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { removeFromCart } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";

export default function Cart() {
  const cartProducts = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();
  const [TotalPrice, setTotal] = useState(0);
  let total = 0;
  const RemoveItem = (item) => {
    dispatch(removeFromCart(item));

  };

  useEffect(() => {
      cartProducts.map((item) => {
        let price = item.price;
        let qty = item.quantity;
        total += price * qty;
        setTotal(total);
      });

      console.log("Calling useeffect:")
     
  });

  const ItemView = ({ item }) => {
    const IMAGE_URL = item.image;
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.Content}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "skyblue",
              }}
            >
              <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />

              <Counter item={item} />
            </View>
            <Text style={styles.Title}>{item.title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              RemoveItem(item);
            }}
            style={{
              backgroundColor: "black",
              alignItems: "center",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <Text style={{ padding: 5, color: "white" }}>Remove</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "brown", flex: 1 }}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={cartProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>

      <View style={styles.orderContainer}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.promoContainer}>
            <Text>Promo Code</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text>{TotalPrice}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => console.log(TotalPrice)}
          style={styles.placeOrderContainer}
        >
          <Text>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  CounterView: {
    flexDirection: "row",
    alignItems: "center",
  },

  Content: {
    flexDirection: "column",
    paddingLeft: 5,
  },
  image: {
    resizeMode: "cover",
    height: 100,
    width: "40%",
    borderRadius: 5,
  },
  ProductDetails: {
    backgroundColor: "skyblue",
    width: "100%",
    height: 100,
    paddingLeft: 5,
    borderTopRightRadius: 10,
  },
  Title: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 10,
    flexShrink: 1,
  },
  Text: {
    color: "white",
    textAlign: "center",
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
  orderContainer: {
    flex: 0.5,
    backgroundColor: "yellow",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: "column",
  },
  promoContainer: {
    backgroundColor: "orange",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  totalContainer: {
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeOrderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
});
