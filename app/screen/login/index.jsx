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
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MyButton } from "../../component";
import { Login } from "../../../assets";
import { navigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");
  const username = "DwiSeptiadi";
  const passwordd = 123;

  const onSubmitLogin = () => {
    if (email == username && pass == passwordd) {
      navigation.navigate("Home");
    }
  };

  const goSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView style={{ backgroundColor: "#8C5CB3" }}>
      <View>
        <ImageBackground
          source={Login}
          resizeMode="stretch"
          style={{ width: windowWidth, height: windowHeight}}
        >
          <Text
            style={{
              fontSize: 30,
              marginTop: '20%',
              color: "white",
              paddingLeft: 20,
              fontWeight: 734,
              alignSelf: "center",
            }}
          >
            Login to Shh!
          </Text>
          <View style={{ height: 56, marginTop: '10%' }}>
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
                  fontWeight: 734,
                  color: "white",
                  marginVertical: "auto",
                  marginLeft: 10,
                }}
              >
                Login With Google
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
                  fontWeight: 734,
                  fontSize: 15,
                }}
              >
                Or Login With Email
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>

          <View style={style.container}>
            <Text style={style.textLabel}>Username or Email</Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              value={email}
            />

            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <Text style={[style.textLabel, { flex: 1 }]}>Password</Text>
              <Text
                style={{
                  textAlign: "right",
                  flex: 1,
                  marginVertical: "auto",
                  fontSize: 15,
                }}
              >
                Forgot?
              </Text>
            </View>

            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={onChangePassword}
              value={pass}
            />
          </View>

          <View style={style.textAccount}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Don't have an account?
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
              onPress={goSignUp}
            >
              Sign up
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
    marginTop: '5%',
  },
  textInputStyle: {
    height: 50,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 18,
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
    fontSize: 18,
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
    flex: 1,
    marginTop: '15%',
    marginLeft: '10%',
    width: "50%",
  },
});
