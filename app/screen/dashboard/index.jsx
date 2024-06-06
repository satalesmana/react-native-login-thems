import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
  } from "react-native";
import React from "react";
  
  const windowWidth = Dimensions.get("window").width;
  
  export default function DashboardScreen({ navigation }) {
    return (
      <ScrollView>
        <View>
          <View style={{ width: windowWidth, height: 500 }}>
            <Text style={style.welcomeToOurApps}>Welcome To GHW App</Text>
            <View style={style.brandStyle}>
              <Image style={{width : 200, height : 250}} source={require("../../../assets/images/dash.jpeg")} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    welcomeToOurApps: {
      fontSize: 22,
      marginTop: 110,
      fontWeight: "400",
      lineHeight: 25,
      textAlign: "center",
      fontFamily: "Roboto",
      color: "rgba(29,34,38,1)",
    },
    brandStyle: {
      marginTop: 200,
      marginBottom: 100,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  