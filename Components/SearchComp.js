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
import BottomComp from "./BottomComp";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/actions";

const TestComp = () => {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
    setFilteredDataSource(movies);
    setMasterDataSource(movies);
    //   console.log(masterDataSource)
  }, []);

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

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
      <View style={styles.Container}>
        <Card
          key={item}
          style={{ marginBottom: 10 }}
          onPress={() => getItem(item)}
        >
          <View style={styles.Content}>
            <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />
            <ScrollView style={styles.ProductDetails}>
              <Text style={styles.Title}>{item.title}</Text>
              <Paragraph>{item.description}</Paragraph>
            </ScrollView>
          </View>
          <BottomComp i={item} price={item.price} />
        </Card>
      </View>
    );
  };

  //   const ItemSeparatorView = () => {
  //     return (
  //       // Flat List Item Separator
  //       <View
  //         style={{
  //           width: "100%",
  //         }}
  //       />
  //     );
  //   };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={styles.container}>
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
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          //   ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 5,
  },
  itemStyle: {
    padding: 10,
  },

  Container: {
    padding: 5,
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

export default TestComp;
