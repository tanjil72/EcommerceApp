import React from "react";
import { StyleSheet, Text, Button, View ,ScrollView} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

function CardComp({ color }) {
  return (
    <View style={{ margin: 10 }}>
      <Card>
       <View style={{flexDirection:'row'}}>
       <Card.Cover
          style={{ resizeMode: "cover", height: 100, width: "40%" }}
          source={{ uri: "https://picsum.photos/701" }}
        />
       <ScrollView style={{backgroundColor:'red',width:'100%',height:100}}>
          <Text style={{fontSize:15,fontWeight:'bold'}}>Title for Product</Text>
          <Paragraph>Product Details</Paragraph>
        </ScrollView>
       </View>
        
        <View style={{ flexDirection: "row",marginTop:5,alignItems:'center',justifyContent:'space-between' }}>
          
          <View style={{ flexDirection: "row", alignItems: "center"}}>
          <View
            style={{
              backgroundColor: "black",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
              borderRadius: 10,
              height:40,
              width:30
            }}
          >
            <Button
              color="white"
              title="+"
              onPress={() => console.log("Increment")}
            ></Button>
          </View>

          <Text style={{ padding: 10 }}>5</Text>
          <View
            style={{
              backgroundColor: "black",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
              borderRadius: 10,
              height:40,
              width:30
            }}
          >
            <Button
              color="white"
              title="-"
              onPress={() => console.log("Decrement")}
            ></Button>
          </View>
          </View>
          <Text style={{paddingRight:10}}>$10</Text>
        </View>
      </Card>
    </View>
  );
}

export default CardComp;
