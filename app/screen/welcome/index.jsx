import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { MyButton } from "../../component";
import { ICGoogle, ICFacebook } from "../../../assets";
import { navigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function WelcomeScreen({ navigation }) {
  const goWelcome = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View>
        <View style={style.whiteCover}>
          <View style={style.lineUp}></View>
        </View>
        <View style={style.imgCover}>
          <ImageBackground
            source={require("../../../assets/images/img25.png")}
            resizeMode="cover"
            style={style.img}
          ></ImageBackground>
          <Image
            style={style.paging}
            source={require("../../../assets/images/paging.png")}
          ></Image>
        </View>
        <Text style={style.heading1}>
          Grow your insight with inspiring news
        </Text>
        <Text style={style.heading2}>
          Explore the world of analyzing news and sports where you will be
          submerged to games!
        </Text>
        <TouchableOpacity onPress={goWelcome} style={style.button}>
          <Text style={style.textButton}>Get Started</Text>
          <View style={style.arrowButton}>
            <Image source={require("../../../assets/images/arrow.png")}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  arrowButton: {
    flex: 1,
    marginVertical: "auto",
    alignItems: "flex-end",
    marginRight: 20,
  },
  textButton: {
    marginLeft: 30,
    marginVertical: "auto",
    color: "white",
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: "red",
    height: 40,
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  paging: {
    alignSelf: "center",
    marginTop: 30,
  },
  img: {
    width: 285,
    height: 307,
    alignSelf: "center",
  },
  whiteCover: {
    width: windowWidth,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 250,
  },
  lineUp: {
    height: 5,
    width: "15%",
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#DFE2EB",
    marginTop: 20,
  },
  imgCover: {
    width: windowWidth,
    height: 400,
    marginTop: -150,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  heading1: {
    fontSize: 28,
    marginTop: -40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    width: 247,
    alignSelf: "center",
  },
  heading2: {
    color: "white",
    width: 247,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15,
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContinueStyle: {
    marginTop: -30,
    textAlign: "center",
    padding: 20,
  },
  textAccount: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    margin: 20,
  },
});
