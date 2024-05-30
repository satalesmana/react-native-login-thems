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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GbrLogin, ICGoogle, ICFacebook } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const user = "ayuytampan";
  const pass = 12345;

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
    <ScrollView backgroundColor="#FFFFFF">
      <View style={style.img}>
        <Text style={style.header1}>Login</Text>
        <Image source={GbrLogin} resizeMode="cover"></Image>
      </View>

      <View style={style.viewInput}>
        <TextInput
          style={[style.textInputStyle]}
          onChangeText={onChangeEmail}
          placeholder="Email"
          placeholderTextColor="#c7c7c7"
          value={email}
        />
      </View>

      <View style={style.viewInput}>
        <TextInput
          style={[style.textInputStyle, { flex: 6 }]}
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

      <Text style={style.forgot}>Lupa Password ?</Text>

      <TouchableOpacity onPress={onSubmitLogin} style={style.btnLogin}>
        <Text style={style.textLogin}>Masuk</Text>
      </TouchableOpacity>

      <View style={style.viewGaris}>
        <View style={style.garis} />
        <View>
          <Text style={style.getIn}>Atau masuk menggunakan</Text>
        </View>
        <View style={style.garis} />
      </View>

      <View style={{ width: windowWidth, marginTop: "8%" }}>
        <TouchableOpacity style={style.btnGoogle}>
          <Image source={ICGoogle} style={style.imgGoogle}></Image>
          <Text style={style.textGoogle}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnFb}>
          <Image source={ICFacebook} style={style.imgFb}></Image>
          <Text style={style.textFb}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={style.viewAccount}>
        <Text style={{ fontSize: 15}}>Belum punya akun?</Text>
        <Text onPress={goSignUp} style={[style.textNow, { color: "blue" }]}>
          Mendaftar
        </Text>
        <Text style={style.textNow}>Sekarang</Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  viewInput: {
    flexDirection: "row",
    height: 60,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: "5%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textInputStyle: {
    height: 60,
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignSelf: "center",
  },
  header1: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    width: windowWidth,
    height: "45%",
    alignItems: "center",
  },
  iconEye: {
    marginVertical: "auto",
    width: "10%",
    flex: 1,
    marginLeft: 11,
  },
  forgot: {
    marginTop: "5%",
    textAlign: "right",
    marginRight: "5%",
  },
  btnLogin: {
    marginTop: "5%",
    backgroundColor: "#3498DB",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textLogin: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
  },
  viewGaris: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "8%",
    width: "90%",
    alignSelf: "center",
  },
  garis: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  getIn: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    color: "grey",
  },
  btnGoogle: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    borderColor: "#E74C3C",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  imgGoogle: {
    marginLeft: "3%",
    marginVertical: "auto",
  },
  textGoogle: {
    flex: 8,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "10%",
    color: "#E74C3C",
  },
  btnFb: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    borderColor: "#3498DB",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: '8%'
  },
  imgFb: {
    marginLeft: "5%",
    marginVertical: "auto",
  },
  textFb: {
    flex: 1,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "5%",
    color: "#3498DB",
  },
  viewAccount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    height: 100,
  },
  textNow: {
    fontSize: 15,
    marginLeft: 5,
  },
});
