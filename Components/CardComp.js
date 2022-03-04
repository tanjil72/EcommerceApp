import * as React from "react";
import { Text, View, Image, TouchableOpacity,ScrollView } from "react-native";

export default class CardComp extends React.Component {
  render() {
    return (
      
       
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Image
              source={require("../assets/h4.jpg")}
              style={{
                height: 135,
                width: 155,
              }}
            />

            <ScrollView style={{ flexDirection: "column",maxHeight:135,backgroundColor:'skyblue' }}>
              <Text
                style={{
                  paddingLeft: 10,
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                Title
              </Text>
              <Text style={{ paddingLeft: 10 }}>Description</Text>
            </ScrollView>
        </View>
    
    );
  }
}
