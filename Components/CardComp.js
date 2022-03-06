import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/actions";

function CardComp() {
  const movies = useSelector((state) => state.moviesReducer.movies);
  // console.log(".....................................................................................................................................")
  // console.log(movies[1].id)
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.Container}>
      
      
      {movies
        ? movies.map((data) => {
          const IMAGE_URL=data.image
          
            return (
              
              <Card>
                <View style={styles.Content}>
                  <Card.Cover
                    style={styles.image}
                    source={{ uri:IMAGE_URL}}
                  />
                  <ScrollView style={styles.ProductDetails}>
                    <Text style={{ fontSize: 15, fontWeight: "bold",paddingBottom:10 }}>
                      {data.title}
                    </Text>
                    <Paragraph>{data.description}</Paragraph>
                  </ScrollView>
                </View>

                <View style={styles.BottomButtonView}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.ButtonContainer}>
                      <Button
                        color="white"
                        title="+"
                        onPress={() => console.log("Increment")}
                      ></Button>
                    </View>

                    <Text style={{ padding: 10 }}>5</Text>

                    <View style={styles.ButtonContainer}>
                      <Button
                        color="white"
                        title="-"
                        onPress={() => console.log("Decrement")}
                      ></Button>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => console.log("Added to Cart")}
                    style={{
                      backgroundColor: "black",
                      width: 150,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ paddingRight: 10, color: "white" }}>
                      Add to Cart | ${data.price}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            );
          })
        : <Text>Getting Data....</Text>}
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
    height: 40,
    width: 30,
  },
});

export default CardComp;
