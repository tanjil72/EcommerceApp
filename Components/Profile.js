import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import {useAuth } from "../firebase";
import { Context } from "./Register";

export default function Profile() {
  const currentUser = useAuth();
  const { CheckLogin } = React.useContext(Context);

  const LoginHandler = () => {
    CheckLogin(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#d1d8e0",justifyContent:'center',alignItems:'center' }}>
      <Text>{currentUser?.email}</Text>
      <Button title="Logout" onPress={LoginHandler}></Button>
    </View>
  );
}
