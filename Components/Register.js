import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import BottomTabNavigator from "../BottomTab/BottomTabNavigator";
import { StatusBar } from "react-native";

export const Context = createContext("Default Value");
const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function CheckLogin(value) {
    setIsLoggedIn(value);
    //console.log("Calling")
  }

  return isLoggedIn ? (
    <Context.Provider value={{ CheckLogin }}>
    <BottomTabNavigator />
    </Context.Provider>
  ) : (
    <NavigationContainer>
      <StatusBar hidden />
      <Context.Provider value={{ CheckLogin }}>
        <MyStack />
      </Context.Provider>
    </NavigationContainer>
  );
}
