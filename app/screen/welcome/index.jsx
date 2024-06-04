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
import React from "react";
import { TouchableOpacity } from "react-native-web";

const windowWidth = Dimensions.get("window").width;

export default function WelcomeScreen({ navigation }) {
  const onSubmitWelcome = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView style={style.container}>
      <View>
        <View style={style.welcomeStyle}>

          <Image source={require("../../../assets/images/welcome.jpg")} />
          <Text style={style.welcomtoapp}>
            Welcome to the app
          </Text>

          <Text style={style.wereexcited}>
            We're excited to help you book and manage your service appointments
            with ease
          </Text>

          <Image source={require("../../../assets/images/lingkaran.jpg")} />
        </View>

        <TouchableOpacity
          style={style.loginStyle}
          onPress={() => navigation.navigate("Login")}
          title="Login"
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: "auto",
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={style.Createnewaccount}
          onPress={() => navigation.navigate("Register")}
        >
          Create new account
        </Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container:{
    padding:15,
    backgroundColor: 'white',
  },
  welcomeStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  welcomtoapp:{
    fontSize: 30, 
    fontWeight: "bold",
    marginTop:10,
  },

  wereexcited:{
    fontSize: 15, 
    textAlign: "center",
    marginTop:10,
  },

  loginStyle: {
    marginTop: 20,
    height: 40,
    width: "93%",
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#2F4EFF",
  },

  Createnewaccount: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    fontSize: 15,
  },
});
