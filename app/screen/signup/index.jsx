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

const windowWidth = Dimensions.get("window").width;

export default function SignupScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");

  const onSubmitLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (pasword.trim().length === 0) {
        throw Error("Password is required");
      }

      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Error", err.message, [
        {
          text: "OK",
          onPress: () => {
            console.log("ERR");
          },
        },
      ]);
    }
  };

  return (
    <ScrollView>
      <Text style={style.heading1}>Create Your Account</Text>
      <Text style={style.heading2}>Create Account for exploring news</Text>

      <View>
        <View style={{ width: windowWidth, height: 400 }}>
          <View style={style.logo}>
            <Image source={require("../../../assets/images/Logo25.png")} />
            <Text style={style.textGamingStyle}>REXDOUS GAMING</Text>
          </View>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Firstname</Text>
          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 15 }}>
              <Image
                source={require("../../../assets/images/card_email.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder={"First name"}
              placeholderTextColor="#c7c7c7"
              value={email}
            />
          </View>
          <Text style={style.textLabel}>Last Name</Text>
          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 15 }}>
              <Image
                source={require("../../../assets/images/card_email.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder={"Last Name"}
              placeholderTextColor="#c7c7c7"
              value={email}
            />
          </View>
          <Text style={style.textLabel}>Password</Text>
          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 15 }}>
              <Image
                source={require("../../../assets/images/card_pass.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder={"Enter your password"}
              placeholderTextColor="#c7c7c7"
              value={email}
            />
          </View>
          <Text style={style.textLabel}>Confirm Password</Text>
          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 15 }}>
              <Image
                source={require("../../../assets/images/card_pass.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder={"Confirm Password"}
              placeholderTextColor="#c7c7c7"
              value={email}
            />
          </View>

          

          <TouchableOpacity
            onPress={onSubmitLogin}
            style={style.Buttoncontinue}
          >
            <Text style={style.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: -300,
  },
  boxInput: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#F8F7FB",
    borderStyle: "solid",
  },
  textContinue: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
  },
  Buttoncontinue: {
    marginTop: 10,
    backgroundColor: "red",
    height: 40,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textInputStyle: {
    padding: 10,
    width: "88%",
  },
  heading1: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading2: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "regular",
    textAlign: "center",
  },
  textGamingStyle: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
});
