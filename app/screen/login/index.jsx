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
} from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import { MyButton } from "../../component";
import { ICFacebook, ICGoogle, ICApple } from '../../../assets'  

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");

  const goSignup = () => {
    navigation.navigate("Signup");
  };

  const onSubmitLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (pasword.trim().length === 0) {
        throw Error("Password is required");
      }

      navigation.navigate("Signup");
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
      <Text style={style.textLoginStyle}>Welcome Back!</Text>
      <Text style={style.textAccountStyle}>
        Let's login for explore continues
      </Text>

      <View>
        <View style={{ width: windowWidth, height: 400 }}>
          <View style={style.logo}>
            <Image source={require("../../../assets/images/Logo25.png")} />
            <Text style={style.textGamingStyle}>REXDOUS GAMING</Text>
          </View>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email or Phone Number</Text>

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
          <Text style={style.textLabel}>Password</Text>

          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 18 }}>
              <Image
                source={require("../../../assets/images/card_pass.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangePassword}
              placeholder={"Enter your password"}
              placeholderTextColor="#c7c7c7"
              value={pasword}
            />
          </View>
          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Text>Don't have account?</Text>
          <Text onPress={goSignup} style={style.textCreate}>
            Create Now
          </Text>
        </View>
      </View>
      <MyButton>
      <View style={style.btnContainer}>
        <View>
        <MyButton
          imgUrl={ICFacebook}/>
          </View>
          <View>
          <MyButton
            imgUrl={ICGoogle}/>
            </View>
            <View>
          <MyButton
            style={{marginLeft:15}}
            imgUrl={ICApple}/>
            </View>
        </View>
      </MyButton>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: -280,
  },
  boxInput: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#F8F7FB",
    borderStyle: "solid",
  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: "red",
    height: 40,
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textCreate: {
    fontWeight: "bold",
    width: 100,
    marginLeft: 3,
  },
  textInputStyle: {
    padding: 10,
    width: "88%",
  },
  textLoginStyle: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  textAccountStyle: {
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
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnContainer1: {
    marginRight:15
  }
});
