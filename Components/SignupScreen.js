import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Signup } from "../firebase";


export default function SignUpScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
  
    async function Signuphandler() {
      if (password === Confirmpassword && password.length >= 6) {
        setLoading(true);
        try {
          (await Signup(email, password)) && alert("Registration Successful");
        } catch (error) {
          alert("Something went wrong");
        }
        setLoading(true);
      } else {
        alert("Password doesn't match or Length less than 6 char");
      }
    }
  
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
          label="Enter Email"
          type="outlined"
          style={{ height: 50, backgroundColor: "#CAD3C8", marginBottom: 10 }}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label="Enter Password"
          secureTextEntry={true}
          style={{ height: 50, backgroundColor: "#CAD3C8", marginBottom: 10 }}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry={true}
          style={{ height: 50, backgroundColor: "#CAD3C8" }}
          value={Confirmpassword}
          onChangeText={(password) => setConfirmPassword(password)}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Button
            disabled={loading}
            style={{ width: 100, marginBottom: 10 }}
            mode="contained"
            onPress={Signuphandler}
          >
            Signup
          </Button>
          <View style={{ flexDirection: "row" }}>
            <Text>Already Have An Account?</Text>
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ color: "blue" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  