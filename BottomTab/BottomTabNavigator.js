import React, {Component, useEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../Components/Cart';
import HomeComponent from '../Components/HomeComponent'
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const MyTabs=()=> {


  return (
      <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeComponent}
      options={{
        headerShown:false,
        tabBarLabel: 'Home',
        tabBarIcon: ({color,size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Cart" component={Cart}
      options={{
        headerShown:false,
        tabBarLabel: 'Cart',
        activeTintColor: 'red',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;