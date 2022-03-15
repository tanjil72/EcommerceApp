import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import BottomTabNavigator from "./BottomTab/BottomTabNavigator";
import SplashScreen from "./Components/SplashScreen";



const App = () => {
  const [splash,setSplash]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(true)
    },3000)
  })
  return (
    splash?(<Provider store={store}>
      <BottomTabNavigator />
    </Provider>):<SplashScreen/>
 
  );
};

export default App;
