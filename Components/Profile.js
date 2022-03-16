import React from "react";
import { Text, View } from "react-native";
import { Signup,useAuth } from "../firebase";

export default function Profile() {
  
  const currentUser=useAuth();
  return (
    <View style={{flex:1,backgroundColor:'#d1d8e0'}}>
      <Text>{currentUser?currentUser.email:''}</Text>
    </View>
  );
}
