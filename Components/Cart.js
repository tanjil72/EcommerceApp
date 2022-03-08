import React, { useEffect } from "react";
import { View, Text, FlatList, Button,StyleSheet,ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Card, Paragraph } from "react-native-paper";
import BottomComp from "./BottomComp";
export default function Cart() {
  const cartProducts = useSelector((state) => state.ProductReducer.cart);
  const ItemView = ({ item }) => {
    const IMAGE_URL = item.image;
    return (
      <View style={styles.container}>
        <Card
          key={item}
          style={{ marginBottom: 10 }}
          //onPress={()=>console.log("Item Added")}
          //onPress={() => getItem(item)}
        >
          <View style={styles.Content}>
            <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />
            <ScrollView style={styles.ProductDetails}>
              <Text style={styles.Title}>{item.title}</Text>
              <Paragraph>{item.description}</Paragraph>
            </ScrollView>
          </View>
          {/* <BottomComp item={item} price={item.price} /> */}
        </Card>
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
    backgroundColor: "black",
    padding: 5,
  },
  FlatlistContainer: {
    backgroundColor: "black",
    padding: 5,
    flex: 1,
  },
  itemStyle: {
    padding: 10,
  },

  Content: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  image: {
    resizeMode: "cover",
    height: 100,
    width: "40%",
    borderTopLeftRadius: 5,
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
  },
  SearchContainer: {
    borderRadius: 20,
    marginBottom: 5,
    backgroundColor: "black",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
