import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Dimensions,
    Button,
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
  
  export default function RegisterScreen({navigation}) {
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
  
    return (
      <ScrollView>
        <View>
          <Text style={style.register}>Register!</Text>
          <View style={{ width: windowWidth, height: 500 }}>
            <View style={style.brandStyle}>
              <Image source={require("../../../assets/images/home.png")} />
            </View>
  
            <View style={style.inputContainer}>
              <View style={style.inputView}>
                <Image source={Mail} style={{ width: 20, height: 15 }} />
                <TextInput
                  style={style.inputText}
                  placeholder="Your Name"
                  value={username}
                  onChangeText={setUsername}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                />
                <Image source={Check} style={{ width: 15, height: 15 }} />
              </View>
              <View style={style.inputView}>
                <Image source={Mail} style={{ width: 20, height: 15 }} />
                <TextInput
                  style={style.inputText}
                  placeholder="Email or Username"
                  value={username}
                  onChangeText={setUsername}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                />
                <Image source={Check} style={{ width: 15, height: 15 }} />
              </View>
              <View style={style.inputView}>
                <Image source={Lock} style={{ width: 17, height: 18 }} />
                <TextInput
                  style={style.inputText}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  autoCorrect={false}
                  autoCapitalize="none"
                />
                <Image source={Eye} style={{ width: 17, height: 13 }} />
              </View>

            </View>
  
            <View style={style.buttonView}>
              <Pressable
                style={style.buttonLogin}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={style.text}>Login</Text>
              </Pressable>
              <Text style={style.orVia}> ──────── Or Via Social Media  ────────</Text>
  
            <View style={style.btnContainer}>
              <MyButton imgUrl={ICGoogle} />
              <MyButton imgUrl={ICFacebook} />
              <MyButton imgUrl={ICTwitter} />
            </View>
            </View>
  
  
  <View style={style.linkContainer}>
  
            <Text style={style.accountText}>
              Already have an account? 
              <a style={style.linkRegister}
                onClick={() => navigation.navigate("Login")}
              >
                <u>Login Now</u>
              </a>
            </Text>
            <Text style={style.accountText}>
              By signing up, you are agree with our  
              <a style={style.linkRegister}
                onClick={() => navigation.navigate("Home")}
              >
                <u>Terms & Conditions</u>
              </a>
            </Text>
  </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    register: {
      fontSize: 22,
      marginTop: 50,
      fontWeight: "400",
      lineHeight: 22,
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      color: "rgba(29,34,38,1)",
    },
    brandStyle: {
      width: 400,
      marginTop: 60,
      marginBottom: 35,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",  
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
      gap: 15,
      width: "73%",
      paddingHorizontal: 40,
      marginBottom: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
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
      marginRight: 52,
      marginTop: 2,
      marginBottom: 30,
    },
    forgotPassword: {
      color: "black",
      fontSize: 12,
      lineHeight: "22px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
    },
    buttonView: {
      alignItems: "center",
      marginBottom: 20,
      marginTop:25
    },
    buttonLogin: {
      width: 40,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 100,
      paddingRight: 100,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 50,
      boxSizing: "border-box",
      backgroundColor: "#1F59B6",
    },
    text: {
      color: "white",
      fontSize: 15,
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
    },
    btnContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginBottom:5
    },
  
    linkContainer:{
      fontWeight: "400",
      lineHeight: 22,
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      color: "rgba(29,34,38,1)",
      flex: 1,
    },
    accountText: {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 30,
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      color: "rgba(29,34,38,1)",
    },
    linkRegister:{
      fontSize: 12,
  
      color: "blue",
      marginLeft: 2,
      fontStyle: "underline"
    }
  });
  