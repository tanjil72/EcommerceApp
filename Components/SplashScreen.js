import React from "react";
import { Image, StatusBar, View } from "react-native";

export default function SplashScreen() {
  return (
    <View>
        <StatusBar hidden/>
      <Image
        source={require('../assets/shop.png')}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
}
