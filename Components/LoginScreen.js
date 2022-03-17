import React, { useState, useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import BottomTabNavigator from "../BottomTab/BottomTabNavigator";
import { Login, useAuth } from "../firebase";
import SignUpScreen from "./SignupScreen";
import { Context } from "./Register";

export default function LoginScreen({ navigation, handleLogin }) {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { CheckLogin } = React.useContext(Context);
  const currentUser = useAuth();
  const LoginHandler = () => {
    Login(email, password)
      .then(function onSuccess(...args) {
        CheckLogin(true)
      })
      .catch(function onFailure(err) {
        alert("Error email/password!")
      });
  };

  const Signup = () => {
    setIsLogin(true);
  };

  return isLogin ? (
    <SignUpScreen />
  ) : (
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
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        type="outlined"
        style={{ height: 50, backgroundColor: "#CAD3C8" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button style={{ width: 100 }} mode="contained" onPress={LoginHandler}>
          Login
        </Button>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text>Don't have any account?</Text>
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={Signup}>
            <Text style={{ color: "blue" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
