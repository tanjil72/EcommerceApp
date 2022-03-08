import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import SearchComp from "./Components/SearchComp";
import BottomTabNavigator from './BottomTab/BottomTabNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <SearchComp/> */}
      <BottomTabNavigator/>
    </Provider>
  );
};

export default App;
