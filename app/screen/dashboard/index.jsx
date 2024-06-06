import {
    View,
    Text,
    StyleSheet,
    Pressable,
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
            <Text style={style.welcomeToOurApps}>Welcome To Our Apps</Text>
            <View style={style.brandStyle}>
              <Image source={require("../../../assets/images/home.png")} />
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
      width: 400,
      marginTop: 100,
      marginBottom: 100,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  