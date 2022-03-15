import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./Components/Header";
import BottomTabNavigator from "./BottomTab/BottomTabNavigator";
import SplashScreen from "./Components/SplashScreen";
import LoginScreen from "./Components/LoginScreen";
import { Text } from "react-native";

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
  };

  return splash ? (
    <Provider store={store}>
      {Login && text==='Tanjil' ? (
        <BottomTabNavigator />
      ) : (
        <LoginScreen LoginHandler={LoginHandler} text={text} setText={setText} />
      )}
      {/* <BottomTabNavigator /> */}
    </Provider>
  ) : (
    <SplashScreen />
  );
};

export default App;
