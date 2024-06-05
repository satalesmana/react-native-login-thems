import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
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

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onSubmitLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (password.trim().length === 0) {
        throw Error("Password is required");
      }

      navigation.navigate("Register");
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
      <View>
        <View style={style.UserStyle1}>
          <Text style={[style.LoginStyle]}>Login</Text>
        </View>

        <Text style={style.welcomebackStyle}>Welcome back to the app</Text>

        <View style={style.containter}>
          <Text style={style.textLabel}>Email Addres</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangeEmail}
            placeholder="Helloexample@gmail.com"
            placeholderTextColor="#c7c7c7"
            value={email}
          />
          <Text
            style={[
              style.textForgetStyle,
              { textAlign: "right", color: "blue" },
            ]}
          >
            Forget password ?
          </Text>
          <Text style={style.textLabel}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="***********"
            placeholderTextColor="#c7c7c7"
            value={password}
          />
        </View>

        <View style={style.containerdua}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{ marginVertical: "auto" }}>Keep me Signed in</Text>
        </View>


        <TouchableOpacity
          style={style.loginStyle}
          onPress={() => navigation.navigate("Home")}
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


        <View>
          <Text style={{ textAlign: "center", marginTop: 20, marginBottom:20, color: 'grey' }}>
            ────────   Or Sign in with   ────────
          </Text>
        </View>

        <View style={style.btnContainer}>
          <MyButton text="Continue with google" imgUrl={ICGoogle} />
        </View>

        <Text
          style={[
            style.textCreateStyle,
            {
              textAlign: "center",
              color: "blue",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 30,
            },
          ]}
          onPress={() => navigation.navigate("Register")}
        >
          Create new account
        </Text>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  welcomeStyle: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  UserStyle1: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 20,
  },
  LoginStyle: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 5,
  },

  welcomebackStyle: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 40,
  },

  textLabel: {
    fontWeight: "bold",
  },

  loginStyle: {
      marginTop: 20,
      height: 40,
      width: "93%",
      alignSelf: "center",
      borderRadius: 30,
      backgroundColor: "#2F4EFF",
  },  

  containter: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#D0D5DD",
  },
  containerdua: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 35,
    alignItems: "baseline",
  },
});
