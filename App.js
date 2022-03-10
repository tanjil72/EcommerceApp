import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import BottomTabNavigator from "./BottomTab/BottomTabNavigator";


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BottomTabNavigator />
    </Provider>
  );
};

export default App;
