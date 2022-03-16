import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import BottomTabNavigator from "./BottomTab/BottomTabNavigator";
import SplashScreen from "./Components/SplashScreen";
import Register from "./Components/Register";

const App = () => {

  const [splash, setSplash] = useState(false);
  const [Login, setLogin] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, 3000);
  }, []);

  const LoginHandler = () => {
    setLogin(true);
    console.log("Calling login")
  };

  return splash ? (

    <Provider store={store}>

      {Login? (
        <BottomTabNavigator />
      ) : (
        <Register/>
      )}
    </Provider>
  ) : (
    <SplashScreen />
  );
};

export default App;
