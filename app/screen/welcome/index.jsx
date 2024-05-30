import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GbrWelcome } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function WelcomeScreen({ navigation }) {
  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView backgroundColor="white">
      <View>
        <View style={{ width: windowWidth, marginTop: "20%" }}>
          <Image
            source={GbrWelcome}
            resizeMode="stretch"
            style={style.img}
          ></Image>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={style.textLoginStyle}>Selamat!</Text>
          <Text style={style.textLoginStyle}>
            Anda sudah berhasil mendaftar
          </Text>
        </View>

        <Text style={style.text2}>
          Silahkan periksa email anda untuk melakukan verifikasi sebelum
          melakukan Login.
        </Text>

        <TouchableOpacity onPress={goLogin} style={style.btnLanjut}>
          <Text style={style.textLanjut}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: "95%",
    alignSelf: "center",
  },
  textLoginStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    width: "70%",
    textAlign: "center",
    alignSelf: "center",
  },
  btnLanjut: {
    marginTop: "38%",
    backgroundColor: "#3498DB",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textLanjut: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
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
    margin: 20,
  },
});
