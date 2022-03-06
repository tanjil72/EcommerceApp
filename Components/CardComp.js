import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

function CardComp() {
  return (
    <View style={styles.Container}>
      <Card>
        <View style={styles.Content}>
          <Card.Cover
            style={styles.image}
            source={{ uri: "https://picsum.photos/701" }}
          />
          <ScrollView style={styles.ProductDetails}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Title for Product
            </Text>
            <Paragraph>Product Details</Paragraph>
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
          <Text style={{ paddingRight: 10 }}>$10</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    margin: 10,
  },
  Content: {
    flexDirection: "row",
  },
  image: {
    resizeMode: "cover",
    height: 100,
    width: "40%",
  },
  ProductDetails: {
    backgroundColor: "red",
    width: "100%",
    height: 100,
  },
  BottomButtonView: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
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
