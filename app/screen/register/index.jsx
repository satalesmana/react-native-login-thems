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
} from "react-native";
import { MyButton } from "../components";
import { ICGoogle } from "../../../assets";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";

const windowWidth = Dimensions.get("window").width;

export default function RegisterScreen({ navigation }) {
  const [nama, onChangeNama] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const onSubmitRegister = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView>
      <View>
        <Text
          style={[
            style.textRegisterStyle,
            {
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 50,
              marginLeft: 20,
            },
          ]}
        >
          Create New Account
        </Text>

        <View style={style.containtertiga}>
          <Text style={style.textLabel}>Nama</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangeNama}
            placeholder="John Dae"
            placeholderTextColor="#c7c7c7"
            value={nama}
          />
          <Text style={style.textLabel}>Email Addres</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangeEmail}
            placeholder="Helloexample@gmail.com"
            placeholderTextColor="#c7c7c7"
            value={email}
          />
          <Text style={style.textLabel}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="***********"
            placeholderTextColor="#c7c7c7"
            value={password}
          />
        </View>

        <View style={style.containeempat}>
          <Text>By Continuing,you agree to our</Text>
          <Text
            style={[style.textTermStyle, { color: "blue", fontWeight: "bold" }]}
          >
            terms of service
          </Text>
        </View>

        <TouchableOpacity
          style={style.loginStyle}
          onPress={() => navigation.navigate("Welcome")}
          title="Sign up"
          color="#0000FF"

        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: "auto",
              color: "white",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        
      </View>

      <Text style={{ textAlign: "center", marginBottom:20 ,marginTop: 50, color:'grey' }}>
        ──────── Or Sign in with ────────
      </Text>
      
      <View style={style.btnContainer}>
        <MyButton text="Continue with google" imgUrl={ICGoogle} />
      </View>

      <View style={style.satupaket}>
        <Text style={style.allready}>All ready have an account?</Text>
        <Text
          style={[style.textTermStyle, { color: "blue", fontWeight: "bold" }]}
        >
          sign in
        </Text>
        
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containtertiga: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  satupaket:{
    marginTop:70,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  containeempat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
    marginBottom:20,
  },
  
  btnContainer: {
    marginTop: 50,
  },

  loginStyle: {
    marginTop: 20,
    height: 40,
    width: "93%",
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#2F4EFF",
  },

  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#D0D5DD",
  },

  allready:{
    marginBottom:30,
  },
});
