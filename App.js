import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
//import SearchComp from "./Components/HomeComponent";
import BottomTabNavigator from './BottomTab/BottomTabNavigator'
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "./redux/actions";


const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <BottomTabNavigator/>
    </Provider>
  );
};

export default App;
