import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardComp from "./Components/CardComp";
import Search from "./Components/Search";
import { useSelector, useDispatch } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import RootNavigator from "./navigation/RootNavigator";

import Movies from "./Screens/Movies";
import Favourites from "./Screens/Favourites";
const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Provider store={store}>
        <Search />
        <ScrollView>
          <CardComp />
        </ScrollView>
      </Provider>
    </View>
  );
};

export default App;
