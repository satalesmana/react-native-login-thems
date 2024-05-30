import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { ICGoogle, ICFacebook, ICTwitter } from "../../../assets";
import { MyButton } from "../../components";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.welcomeBack}>Welcome Back!</Text>
      <View style={style.brandStyle}>
        <Image source={require("../../../assets/images/home.png")} />
      </View>
      <View style={style.inputContainer}>
        <View style={style.inputView}>
          <Icon
            name="envelope"
            size={15}
            color="blue"
            style={style.imgStyleLeft}
          />
          <TextInput
            style={style.inputText}
            placeholder="Enter your email or username"
            placeholderTextColor="black"
          />
          <Icon
            name="check"
            size={18}
            color="blue"
            style={(style.imgStyleRight, { marginRight: 2 })}
          />
        </View>
        <View style={style.inputView}>
          <Icon name="lock" size={18} color="blue" style={style.imgStyleLeft} />
          <TextInput
            style={style.inputText}
            placeholder="Enter your password"
            placeholderTextColor="black"
          />
          <Icon name="eye" size={15} color="#000" style={style.imgStyleLeft} />
        </View>
      </View>
      <View style={style.forgotView}>
        <Text style={style.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={style.buttonView}>
        <Pressable
          style={style.buttonLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={style.text}>Login</Text>
        </Pressable>
        <View style={style.viewVia}>
          <Text style={style.orVia}> Or Via Social Media </Text>
        </View>
        <View style={style.btnContainer}>
          <MyButton imgUrl={ICGoogle} />
          <MyButton imgUrl={ICFacebook} />
          <MyButton imgUrl={ICTwitter} />
        </View>
      </View>

      <Text style={style.accountText}>
        Don't have an account?{" "}
        <Text
          style={style.linkRegister}
          onPress={() => navigation.navigate("Register")}
        >
          Register Now
        </Text>
      </Text>
      <Text style={style.accountText}>
        By signing up, you are agree with our{" "}
        <Text
          style={style.linkRegister}
          onPress={() => navigation.navigate("Home")}
        >
          Terms & Conditions
        </Text>
      </Text>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 25,
  },
  welcomeBack: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "rgba(29,34,38,1)",
    marginBottom: 25,
  },
  brandStyle: {
    marginTop: 50,
    marginBottom: 70,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    gap: 10,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imgStyleLeft: {
    width: 20,
    height: 20,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  imgStyleRight: {
    width: 16,
    height: 18,
    marginRight: 10,
  },
  forgotView: {
    alignSelf: "flex-end",
    marginRight: 55,
    marginTop: 2,
    marginBottom: 20,
  },
  forgotPassword: {
    color: "black",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  buttonView: {
    alignItems: "center",
    marginBottom: 10,
  },
  buttonLogin: {
    borderRadius: 50,
    backgroundColor: "#1F59B6",
    paddingVertical: 8,
    paddingHorizontal: 32,
    elevation: 3,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  viewVia: {
    alignContent: "center",
    marginTop: 35,
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  orVia: {
    color: "black",
    fontSize: "15",
    fontFamily: "Roboto",
    fontWeight: "100",
  },
  btnContainer: {
    flexDirection: "row",
    paddingHorizontal: 125,
    paddingBottom: 20,
  },
  accountText: {
    color: "black",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
  },
  linkRegister: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
});
