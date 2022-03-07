import React from "react";
import { ScrollView, View } from "react-native";
import CardComp from "./Components/CardComp";
import Search from "./Components/Search";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import SearchComp from "./Components/SearchComp";

const App = () => {
  return (
    <Provider store={store}>
      {/* <View style={{ flex: 1, flexDirection: "column" }}>
        <Header />
        <Search />
        <ScrollView>
          <CardComp />
        </ScrollView>
      </View> */}
      <Header />
      <SearchComp/>
    </Provider>
  );
};

export default App;
