import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";


function CardComp() {
 

  return (
    <View style={styles.Container}>
      
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
