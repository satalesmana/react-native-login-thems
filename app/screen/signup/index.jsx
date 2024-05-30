import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";
import { SignUp } from "../../../assets";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SignUpScreen({ navigation }) {
  const onSubmitLogin = () => {
    navigation.navigate("Login");
  };

  const [name, onChangeName] = React.useState("");
  const [user, onChangeUser] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");
  const username = "DwiSeptiadi";
  const passwordd = 123;

  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={{ backgroundColor: "#8C5CB3" }}>
      <ImageBackground
        source={SignUp}
        resizeMode="stretch"
        style={{ width: windowWidth, height: windowHeight }}
      >
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            color: "white",
            paddingLeft: 20,
            fontWeight: 734,
            alignSelf: "center",
          }}
        >
          Sign up to Shh!
        </Text>
        <View style={{ height: 56, marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 10,
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              width: "80%",
              alignSelf: "center",
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../../../assets/images/flat-color-icons_google.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginVertical: "auto",
                marginLeft: 10,
              }}
            >
              Sign up With Google
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                textAlign: "center",
                marginLeft: 20,
                marginRight: 20,
                fontSize: 15,
                marginTop: 5,
              }}
            >
              Or continue with Email
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>

        <View style={style.container}>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeName}
            placeholder="Enter your name"
            placeholderTextColor={"grey"}
            value={name}
          />
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeUser}
            placeholder="Enter your username"
            placeholderTextColor={"grey"}
            value={user}
          />
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="Enter email"
            placeholderTextColor={'grey'}
            value={email}
          />
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="Enter password"
            placeholderTextColor={"grey"}
            value={pass}
          />
        </View>

        <Text style={style.label}>
          I agree with the Terms of Service and Privacy policy
        </Text>
        <View style={{ height: 56, width: '60%', alignSelf: 'flex-end', marginTop: '15%' }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                alignItems: "center",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "80%",
                alignSelf: "center",
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  marginVertical: "auto",
                  marginLeft: 10,
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
      
        <View style={style.textAccount}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Already have an account?
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            onPress={goLogin}
          >
            Login
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  label: {
    margin: 8,
    color: "white",
    fontSize: 15,
    width: 300,
    marginLeft: '20%'
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 15,
    width: "90%",
  },
  textAccount: {
    flex: 1,
    width: "50%",
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: '5%',

  },
});
