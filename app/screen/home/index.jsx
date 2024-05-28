import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { MyButton } from "../../components";
import { ICGoogle, ICFacebook, ICTwitter } from "../../../assets";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Text style={style.welcomeToOurApps}>Welcome To Our Apps</Text>
        <View style={{ width: windowWidth, height: 500 }}>
          <View style={style.brandStyle}>
            <Image source={require("../../../assets/images/home.png")} />
          </View>

          <View style={style.buttonView}>
            <Pressable
              style={style.buttonNext}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={style.text}>Next</Text>
            </Pressable>
            <Text style={style.orVia}> ──────── Or Via Social Media  ────────</Text>
          </View>

          <View style={style.btnContainer}>
            <MyButton imgUrl={ICGoogle} />
            <MyButton imgUrl={ICFacebook} />
            <MyButton imgUrl={ICTwitter} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  welcomeToOurApps: {
    fontSize: 22,
    marginTop: 100,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    color: "rgba(29,34,38,1)",
  },
  brandStyle: {
    width: 400,
    marginTop: 80,
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonView: {
    alignItems: "center",
  },
  buttonNext: {
    width: 40,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 50,
    boxSizing: "border-box",
    backgroundColor: "#1F59B6",
  },
  text: {
    color: "white",
    fontSize: 18,
    lineHeight: "22px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",
    letterSpacing: 1,
  },
  orVia: {
    color: "black",
    fontSize: "15",
    lineHeight: "3",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 125,
    paddingRight: 125,
    paddingBottom: 100,
  },
});
