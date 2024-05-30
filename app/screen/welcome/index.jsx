import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { navigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { GB1, GB2, GB3 } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function WelcomeScreen({ navigation }) {
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const goSignUp = () => {
    navigation.navigate("Create");
  };

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View>
        <ImageBackground source={GB1} resizeMode="cover" style={style.img3} />
      </View>
      <View style={style.view1}>
        <ImageBackground source={GB2} resizeMode="stretch" style={style.img1}>
          <ImageBackground
            source={GB3}
            resizeMode="stretch"
            style={style.img2}
          />
          <Text style={style.text1}>Time To Work</Text>
          <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
            welcome back we missed you
          </Text>
          <LinearGradient
            style={style.view2}
            colors={["#9C3FE4", "#C65647"]}
            start={[0, 0]}
            end={[1, 1]}
            location={[0.25, 0.4, 1]}
          >
            <Text onPress={goLogin} style={style.start}>
              Start
            </Text>
          </LinearGradient>
          <LinearGradient
            style={style.view2}
            colors={["#9C3FE4", "#C65647"]}
            start={[0, 0]}
            end={[1, 1]}
            location={[0.25, 0.4, 1]}
          >
            <Text onPress={goSignUp} style={style.start}>
              Sign Up
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  start: {
    textAlign: "center",
    paddingTop: 15,
    color: "white",
    fontSize: 20,
  },
  img2: {
    width: windowWidth,
    height: 200,
    marginTop: 65,
  },
  img1: {
    width: windowWidth,
    height: 635,
    marginTop: -200,
  },
  img3: {
    width: windowWidth,
    height: 393,
  },
  view1: {
    borderTopRightRadius: 25,
    width: windowWidth,
    borderTopLeftRadius: 25,
  },
  view2: {
    backgroundColor: "#9C3FE4",
    height: 60,
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
  },
  text1: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
  },
});
