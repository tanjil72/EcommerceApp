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
  const [TotalPrice, setTotal] = useState(0);
  const [CountTotal, setCountTotal] = useState(false);
  // if(cartProducts && !cartProducts.length){
  //   setTotal(0)
  // }
  const dispatch = useDispatch();

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

    // console.log("Calling useeffect:")
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
                backgroundColor: "#d1d8e0",
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
            style={{backgroundColor:'#b33939',alignItems:'center',flex:1,borderBottomLeftRadius:5,borderBottomRightRadius:5}}
          >
            <Text style={{color:'white',padding:5}}>Remove</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    cartProducts.length===0?(<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#d1d8e0'}}><Text style={{fontWeight:'bold',fontSize:20}}>No items in the Cart</Text></View>):(<View style={{ backgroundColor: "#CAD3C8", flex: 1 }}>
    <View style={{ flex: 3 }}>
      <FlatList
        data={cartProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>

    <View style={styles.orderContainer}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.totalContainer}>
          <Text style={{fontSize:20}}>
            Total: {TotalPrice.toFixed(2)}$
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            console.log(cartProducts && !cartProducts.length ? 0 : TotalPrice.toFixed(2))
          }
          style={styles.placeOrderContainer}
        >
          <Text style={{fontSize:16,fontWeight:'bold'}}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>)
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
    backgroundColor: "#CAD3C8",
    width: "100%",
    height: 100,
    paddingLeft: 5,
    borderTopRightRadius: 10,
  },
  Title: {
    fontSize: 15,
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
    backgroundColor: "#f7f1e3",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  placeOrderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#33d9b2",
  },
});
