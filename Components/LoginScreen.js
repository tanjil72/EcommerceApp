import React from "react";
import { StatusBar, Text, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function LoginScreen({LoginHandler,text,setText}) {
  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#d1d8e0",
      }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 10,marginTop:-100 }}
      >
        <Image
          source={require("../assets/cart.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
          }}
        />
      </View>

      <TextInput
        label="Email"
        type="outlined"
        style={{ height: 50, backgroundColor: "#CAD3C8", marginBottom: 10 }}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Password"
        type="outlined"
        style={{ height: 50, backgroundColor: "#CAD3C8" }}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
          style={{ width: 100 }}
          mode="contained"
          onPress={LoginHandler}
        >
          Login
        </Button>
      </View>
    </View>
  );
}
