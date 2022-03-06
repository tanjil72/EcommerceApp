import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardComp from "./Components/CardComp";
import Search from "./Components/Search";

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/* <Search /> */}
      <CardComp />
      
      
    </View>
  );
};

export default App;
