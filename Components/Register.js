import React, { useState,createContext  } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import BottomTabNavigator from '../BottomTab/BottomTabNavigator'

const Context = createContext('Default Value');
const Stack = createStackNavigator();

function MyStack(LoginHandler) {
  //console.log(LoginHandler)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
      {props => <LoginScreen {...props} LoginHandler={LoginHandler} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateState(){
    setIsLoggedIn(true)
    console.log(isLoggedIn)
}
  return isLoggedIn ? (
     <BottomTabNavigator/>
  ) : (
    <NavigationContainer>
      <MyStack LoginHandler={updateState}/>
    </NavigationContainer>
  );
}
