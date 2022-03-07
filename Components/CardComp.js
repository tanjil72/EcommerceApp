import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/actions";
import BottomComp from "./BottomComp";

function CardComp() {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.Container}>
      {movies ? (
        movies.map((data, i) => {
          const IMAGE_URL = data.image;
          return (
            <Card key={i} style={{marginBottom:10}}>
              <View style={styles.Content}>
                <Card.Cover style={styles.image} source={{ uri: IMAGE_URL }} />
                <ScrollView style={styles.ProductDetails}>
                  <Text style={styles.Title}>{data.title}</Text>
                  <Paragraph>{data.description}</Paragraph>
                </ScrollView>
              </View>
              <BottomComp i={i} price={data.price} />
            </Card>
          );
        })
      ) : (
        <Text>Getting Data....</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
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
});

export default CardComp;
