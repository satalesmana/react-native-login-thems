import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  color,
} from "react-native";
import React, { useState } from "react";
import { MyButton } from "../../component";
import { ICGoogle, ICFacebook, ICMacOs } from "../../../assets";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GB1, GB2, GB3, Person, Key } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const logEmail = "coba";
  const logPass = 123;

  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = () => {
    if (email == logEmail && password == logPass) {
      navigation.navigate("Home");
    } else {
      alert("Email or Password is Wrong");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View>
        <View>
          <ImageBackground source={GB1} resizeMode="cover" style={style.img3} />
        </View>
        <View style={style.view1}>
          <ImageBackground source={GB2} resizeMode="stretch" style={style.img1}>
            <ImageBackground
              source={GB3}
              resizeMode="stretch"
              style={style.img2}
            />
            <Text style={style.heading1}>Welcome Back!</Text>
            <Text style={style.heading2}>welcome back we missed you</Text>

            <View style={style.container}>
              <Text style={style.textLabel}>Username</Text>
              <View style={style.inputan}>
                <View style={style.card}>
                  <Image source={Person}></Image>
                </View>
                <TextInput
                  style={style.textInputStyle}
                  onChangeText={onChangeEmail}
                  placeholder={"Username or Email"}
                  placeholderTextColor="#c7c7c7"
                  value={email}
                />
              </View>

              <Text style={[style.textLabel, { marginTop: 20 }]}>Password</Text>
              <View style={style.inputan}>
                <View style={style.card}>
                  <Image source={Key}></Image>
                </View>
                <TextInput
                  style={[style.textInputStyle2]}
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="#c7c7c7"
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

              <Text style={style.forgot}>Forgot Password?</Text>
              <LinearGradient
                style={style.view2}
                colors={["#9C3FE4", "#C65647"]}
                start={[0, 0]}
                end={[1, 1]}
                location={[0.25, 0.4, 1]}
              >
                <Text onPress={onSubmitLogin} style={style.signIn}>
                  Sign in
                </Text>
              </LinearGradient>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <LinearGradient
                  colors={["black", "#D9D9D9BF"]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={style.garis}
                />
                <Text style={style.textContinueStyle}>Or Continue With</Text>
                <LinearGradient
                  colors={["#D9D9D9BF", "black"]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={style.garis}
                />
              </View>
            </View>
          <View style={style.btnContainer}>
            <MyButton imgUrl={ICGoogle} />
            <MyButton imgUrl={ICMacOs} style={{ marginLeft: 20 }} />
            <MyButton imgUrl={ICFacebook} style={{ marginLeft: 20 }} />
          </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    flex: 1,
    marginVertical: "auto",
    marginLeft: 15,
  },
  inputan: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#64575766",
    borderStyle: "solid",
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
  garis: {
    flex: 1,
    height: 1,
    marginVertical: "auto",
  },
  textInputStyle: {
    padding: 10,
    width: "88%",
    color: "white",
  },
  textInputStyle2: {
    padding: 10,
    width: "78%",
    color: "white",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#c7c7c7",
    marginLeft: "5%",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    width: "70%",
    alignSelf: "center",
    marginTop: -50,
  },
  textContinueStyle: {
    marginVertical: "auto",
    textAlign: "center",
    color: "white",
    flex: 1,
    padding: 5,
  },
  signIn: {
    textAlign: "center",
    paddingTop: 15,
    color: "white",
    fontSize: 20,
  },
  img2: {
    width: windowWidth,
    height: 200,
    marginTop: 65,
  },
  img1: {
    width: windowWidth,
    height: 700,
    marginTop: -250,
  },
  img3: {
    width: windowWidth,
    height: 393,
  },
  view1: {
    borderTopRightRadius: 25,
    width: windowWidth,
    borderTopLeftRadius: 25,
  },
  forgot: {
    textAlign: "right",
    color: "#c7c7c7",
    marginTop: 15,
    marginRight: "5%",
  },
  iconEye: {
    marginVertical: "auto",
    width: "10%",
    padding: "auto",
  },
  view2: {
    backgroundColor: "#9C3FE4",
    height: 60,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  heading1: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -120,
  },
  heading2: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
