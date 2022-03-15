import React, { Component, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "../Components/Cart";
import HomeComponent from "../Components/HomeComponent";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../Components/Profile";

const Tab = createBottomTabNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "white",
    background: "red",
    card: "#7f8fa6",
    text: "black",
    border: "black",
    notification: "red",
  },
};

const MyTabs = () => {
  const cartProducts = useSelector((state) => state.ProductReducer.cart);
  const BadgedIcon =
    cartProducts.length === 0 ? Icon : withBadge(cartProducts.length)(Icon);
  const HomeIcon = Icon;
  const ProfileIcon = Icon;
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeComponent}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              //<MaterialCommunityIcons name="home" color={color} size={size} />,
              <HomeIcon type="ionicon" name="ios-home" />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              //<MaterialCommunityIcons name="cart" color={color} size={size} />,
              <BadgedIcon type="ionicon" name="ios-cart" />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              //<MaterialCommunityIcons name="cart" color={color} size={size} />,
              <ProfileIcon type="ionicon" name="person" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
