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
import {
  ICGoogle,
  ICFacebook,
  ICTwitter,
  Mail,
  Lock,
  Check,
  Eye,
} from "../../../assets";
import { MyButton } from "../../components";
import React, { useState } from "react";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");

  return (
    <ScrollView>
      <View>
        <Text style={style.welcomeToOurApps}>Welcome Back!</Text>
        <View style={{ width: windowWidth, height: 500 }}>
          <View style={style.brandStyle}>
            <Image source={require("../../../assets/images/home.png")} />
          </View>

          <View style={style.inputContainer}>
            <View style={style.inputView}>
              <Image source={Mail} />
              <TextInput
                style={style.inputText}
                placeholder="Email or Username"
                value={username}
                onChangeText={setUsername}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
              />
              <Image source={Check} />
            </View>
            <View style={style.inputView}>
              <Image source={Lock} />
              <TextInput
                style={style.inputText}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize="none"
              />
              <Image source={Eye} />
            </View>
            <View style={style.forgotView}>
              <Text style={style.forgotPassword}>Forgot Password?</Text>
            </View>
            <View style={style.loginView}>
              <Pressable
                style={style.buttonLogin}
                onPress={() => navigation.navigate("Dashboard")}
              >
                <Text style={style.text}>Login</Text>
              </Pressable>
              <Text style={style.orVia}>Or Via Social Media</Text>
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
    marginTop: 75,
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    color: "rgba(29,34,38,1)",
  },
  brandStyle: {
    width: 400,
    marginTop: 80,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    gap: 15,
    width: "70%",
    paddingHorizontal: 40,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  inputText: {
    height: 50,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 7,
  },
  forgotView: {
    alignSelf: "flex-end",
    marginRight: 62,
    marginTop: 2,
  },
  forgotPassword: {
    color: "black",
    fontSize: 12,
    lineHeight: "22px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",
  },
  loginView: {
    alignContent: "center",
    marginTop: 20,
  },
  buttonLogin: {
    width: 40,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 105,
    marginRight: 100,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 60,
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
    lineHeight: "8",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 125,
    paddingRight: 125,
  },
});
