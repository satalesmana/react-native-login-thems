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
const windowWidth = Dimensions.get("window").width;
export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");

  const onSubmitLogin = () => {
    alert(email);
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 50 }}>
          <View style={style.StatusBarStyle}>
            <Image source={require("../../../assets/images/Status Bar.png")} />
          </View>

          <View style={style.UserStyle1}>
            <Text style={[style.LoginStyle]}>Login</Text>
            <Image source={require("../../../assets/images/User.png")} />
          </View>
          <Text style={style.welcomebackStyle}>
            Welcome back , Rohit thakur
          </Text>

          <View style={style.gambarStyle}>
            <Image source={require("../../../assets/images/gambar.png")} />
          </View>
          <Text
            style={[
              style.textEnterStyle,
              {
                fontSize: 17,
                textAlign: "center",
                color: "#F2796B",
                fontWeight: "bold",
              },
            ]}
          >
            ENTER YOUR MOBILE NUMBER
          </Text>
        </View>

        

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  gambarStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  StatusBarStyle: {
    marginTop: 0,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  UserStyle1: {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 20,
  },
  LoginStyle: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 5,
  },
  welcomebackStyle: {
    fontSize: 11,
    marginTop: 20,
    marginLeft: 20,
  },
});
