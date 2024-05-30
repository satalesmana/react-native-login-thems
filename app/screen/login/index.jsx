import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ICGoogle, ICFacebook } from "../../../assets";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const user = "Percobaan";
  const pass = 123;

  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goSignUp = () => {
    navigation.navigate("SignUp");
  };

  const onSubmitLogin = () => {
    if (email == user && password == pass) {
      navigation.navigate("Home");
    } else {
      alert("Email or Password is Wrong");
    }
  };

  return (
    <ScrollView backgroundColor="white">
      <Text style={style.header}>Log in</Text>

      <View style={style.viewInput}>
        <TextInput
          style={[style.textInputStyle, { flex: 8 }]}
          onChangeText={onChangeEmail}
          placeholder="Email Address"
          // placeholderTextColor="black"
          value={email}
        />
      </View>
      <View style={style.viewInput2}>
        <TextInput
          style={[style.textInputStyle, { flex: 8 }]}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          placeholder="Password"
          // placeholderTextColor="#c7c7c7"
          value={password}
        />

        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color="#aaa"
          style={style.iconEye}
          onPress={toggleShowPassword}
        />
      </View>
      <Text style={style.forgot}>Forgot Password ?</Text>
      <TouchableOpacity onPress={onSubmitLogin} style={style.btnLogin}>
        <Text style={style.textLogin}>Log in</Text>
      </TouchableOpacity>
      <View style={style.viewAccount}>
        <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
        <Text onPress={goSignUp} style={style.textSign}>
          Sign Up
        </Text>
      </View>

      <View style={style.viewGaris}>
        <View style={style.garis} />
        <View>
          <Text style={style.OR}>OR</Text>
        </View>
        <View style={style.garis} />
      </View>

      <TouchableOpacity style={style.btnFG}>
        <Image
          source={ICGoogle}
          style={{ marginLeft: "3%", marginVertical: "auto" }}
        ></Image>
        <Text style={style.textFG}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btnFG}>
        <Image
          source={ICFacebook}
          style={{ marginLeft: "4%", marginVertical: "auto" }}
        ></Image>
        <Text style={style.textFG}>Sign in with Facebook</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "8%",
  },
  viewInput: {
    flexDirection: "row",
    height: 60,
    borderColor: "grey",
    backgroundColor: "#FFF6F5",
    padding: 10,
    // borderWidth: 1,
    marginTop: "8%",
    width: windowWidth - 0.15 * windowWidth,
    alignSelf: "center",
    borderRadius: 10,
  },
  viewInput2: {
    flexDirection: "row",
    height: 60,
    borderColor: "grey",
    backgroundColor: "#FFF6F5",
    padding: 10,
    // borderWidth: 1,
    marginTop: "5%",
    width: windowWidth - 0.15 * windowWidth,
    alignSelf: "center",
    borderRadius: 10,
  },
  btnLogin: {
    marginTop: "7%",
    backgroundColor: "#F71B33",
    height: 56,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  OR: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  textFG: {
    flex: 8,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "10%",
  },
  btnFG: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: "10%",
  },
  garis: { flex: 1, height: 1, backgroundColor: "#DEDEDE" },
  viewGaris: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "8%",
    width: "90%",
    alignSelf: "center",
  },
  textSign: { color: "#EA4335", marginLeft: 5, fontSize: 15 },
  viewAccount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    height: 50,
  },
  textLogin: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
  },
  forgot: {
    marginTop: "5%",
    marginLeft: "10%",
    fontSize: 15,
    color: "red",
  },
  iconEye: {
    marginVertical: "auto",
    width: "10%",
    flex: 1,
    marginLeft: 11,
  },
  textInputStyle: {
    height: 60,
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
    width: "100%",
    alignSelf: "center",
  },
});
