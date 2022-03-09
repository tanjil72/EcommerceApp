import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import BottomComp from "./BottomComp";
import { removeFromCart } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";

export default function Cart() {
  const cartProducts = useSelector((state) => state.ProductReducer.cart);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const addCountHandler = (item) => {
    setCount(count + 1);
    console.log(item);
  };

  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleclick = (item) => {
    dispatch(removeFromCart(item));
    // console.log(item.id)
  };

  const ItemView = ({ item }) => {
    const IMAGE_URL = item.image;
    return (
      <View style={styles.container} key={item}>
        <Card key={item} style={{ marginBottom: 10 }}>
          <View style={styles.Content}>
            <View
              style={{ flex: 1, flexDirection: "row", backgroundColor: "skyblue" }}
            >
              <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />
              
                <Counter price={item.price} />
               
              
            </View>
            <Text style={styles.Title}>{item.title}</Text>
          </View>
        </Card>
        <Button title="remove" onPress={() => handleclick(item)}></Button>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cartProducts}
        keyExtractor={(item, index) => index.toString()}
        //   ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
});
