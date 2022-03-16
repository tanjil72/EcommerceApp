import React, { useState,useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import BottomTabNavigator from '../BottomTab/BottomTabNavigator'

export default function LoginScreen({ navigation },LoginHandler) {
   
  const [LoginVal, setLogin] = useState(false);
  const [text, setText] = useState("");
  //console.log(LoginHandler)
  
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
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          marginTop: -100,
        }}
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
          onPress={()=>LoginHandler}
        >
          Login
        </Button>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text>Don't have any account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "blue" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
