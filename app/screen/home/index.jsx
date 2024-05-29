import {
  View,
  Text,
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
        <View style={{ width: windowWidth, height: 500 }}>
          <Text style={style.welcomeToOurApps}>Welcome To Our Apps</Text>
          <View style={style.brandStyle}>
            <Image source={require("../../../assets/images/home.png")} />
          </View>

          <View style={style.buttonView}>
            <Pressable
              style={style.buttonNext}
              onPress={() => navigation.navigate("Login")}
            >
              <View>
                <Text style={style.text}>Next</Text>
              </View>
            </Pressable>

            <View style={style.viewVia}>
              <Text style={style.orVia}>
                ──────── Or Via Social Media ────────
              </Text>
            </View>
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
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    backgroundColor: "#1F59B6",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  viewVia: {
    alignContent: "center",
    marginTop: 50,
    marginBottom: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  orVia: {
    color: "black",
    fontSize: "15",
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 125,
    paddingRight: 125,
    paddingBottom: 100,
  },
});
