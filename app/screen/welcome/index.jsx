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
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MyButton } from "../../component";
import { Welcome } from "../../../assets";
import { navigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function WelcomeScreen({ navigation }) {
  const onSubmitLogin = () => {
    navigation.navigate("Login");
  };
  const goSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView style={{ backgroundColor: "#8C5CB3", borderTopRightRadius: 30, borderTopLeftRadius: 30, height: 34 }}>
      <View>
        <ImageBackground
          source={Welcome}
          resizeMode="stretch"
          style={{ width: windowWidth, height: windowHeight, marginTop: '20%'}}
        >
          <Text
            style={{
              fontSize: 40,
              marginTop: -45,
              color: "white",
              paddingLeft: 20,
              width: 264,
              fontWeight: 'bold'
            }}
          >
            Welcome To Shh!
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              paddingLeft: 20,
              width: 342,
              fontWeight: 'bold'
            }}
          >
            A Hub Where Whispers Echo Loudest
          </Text>

          <TouchableOpacity
          onPress={goSignUp}
            style={{
              backgroundColor: "black",
              height: 60,
              width: "80%",
              alignSelf: "center",
              borderRadius: 20,
              marginTop: 350,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginVertical: "auto",
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>

          <View
            style={{
              height: 60,
              width: "80%",
              alignSelf: "center",
              marginTop: -30,
            }}
          >
            
          </View>
          <View style={style.textAccount}>
            <Text style={{ color: "white", fontSize: 16 }}>Already have an account?</Text>
            <Text
              style={{ fontWeight: "bold", marginLeft: 5, fontSize: 16}}
              onPress={onSubmitLogin}
            >
              Login
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 120,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: "center",
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
    marginTop: 180,
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
    marginTop: -190,
  },
});
