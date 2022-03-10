import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  StatusBar,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Card, Paragraph } from "react-native-paper";
import AddToCart from "./AddToCart";
import { useSelector, useDispatch } from "react-redux";
//import { GetProducts } from "../redux/actions";

const HomeComponent = () => {
  const API_URL = "https://fakestoreapi.com/products";
  //const Products = useSelector((state) => state.ProductReducer.products);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    //dispatch(GetProducts());
    
    fetch(API_URL)
    .then((response) => response.json())
    .then((response) => {
      setFilteredDataSource(response);
      setMasterDataSource(response);
      //dispatch(GetProducts(response));
    })
    .catch((err) => {
      console.error(err);
    });


  }, []);


  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    const IMAGE_URL = item.image;
    return (
      <View style={styles.container}>
        <Card key={item} style={{ marginBottom: 10 }}>
          <View style={styles.Content}>
            <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />
            <ScrollView style={styles.ProductDetails}>
              <Text style={styles.Title}>{item.title}</Text>
              <Paragraph>{item.description}</Paragraph>
            </ScrollView>
          </View>
          <AddToCart item={item} />
        </Card>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar hidden />
      {masterDataSource ? (
        <View style={{ flex: 1 }}>
          <SearchBar
            containerStyle={styles.SearchContainer}
            inputStyle={{ margin: 0 }}
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="Type to Search"
            value={search}
          />
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              renderItem={ItemView}
            />
          </View>
        </View>
      ) : (
        <Text>Getting Data.....</Text>
      )}
    </View>
  );
};

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

export default HomeComponent;
