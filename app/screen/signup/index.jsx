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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Heading1 = windowHeight * 0.78;

export default function SignUpScreen({ navigation }) {
  const [nama, onChangeNama] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [HP, onChangeHP] = React.useState("");

  // State variable to hold the password
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView backgroundColor="white">
      <View>
        {/* Gambar dan Text Sign Up */}
        <View style={{ width: windowWidth, height: Heading1 }}>
          <Text style={style.textSignUp}>Sign Up</Text>
          <Image
            source={require("../../../assets/images/signup.png")}
            resizeMode="stretch"
            style={style.imgSignUp}
          ></Image>
        </View>
        {/* Akhir Gambar dan Text Sign Up */}

        {/* Awal Textinput Nama */}
        <View style={style.inputName}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            onChangeText={onChangeNama}
            placeholder="Nama Lengkap"
            placeholderTextColor="#c7c7c7"
            value={nama}
          />
        </View>
        {/* Akhir Textinput Nama*/}

        {/* Awal Textinput  Email */}
        <View style={style.textInput2}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            onChangeText={onChangeEmail}
            placeholder="Email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />
        </View>
        {/* Akhir Textinput Email */}

        {/* Awal Textinput  No HP */}
        <View style={style.textInput2}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            onChangeText={onChangeHP}
            placeholder="Nomor HP"
            placeholderTextColor="#c7c7c7"
            value={HP}
          />
        </View>
        {/* Akhir Textinput  No HP */}

        {/* Awal Textinput Password */}
        <View style={style.textInput2}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
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
        {/* Akhir Textinput Password */}

        {/* Awal Textinput konfirmasi password */}
        <View style={style.textInput2}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            secureTextEntry={!showPassword2}
            onChangeText={setPassword2}
            placeholder="Konfirmasi Password"
            placeholderTextColor="#c7c7c7"
            value={password2}
          />

          <MaterialCommunityIcons
            name={showPassword2 ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
            style={style.iconEye}
            onPress={toggleShowPassword2}
          />
        </View>
        {/* Akhir Textinput konfirmasi password */}

        {/* Awal View button mendaftar */}
        <TouchableOpacity style={style.btnDaftar}>
          <Text style={style.textDaftar}>Mendaftar</Text>
        </TouchableOpacity>
        {/* Akhir view dengan button mendaftar */}

        {/* Awal View Garis dengan Text */}
        <View style={style.OR}>
          <View style={style.garis} />
          <View>
            <Text style={style.garis2}>Atau masuk menggunakan</Text>
          </View>
          <View style={style.garis} />
        </View>

        {/* Akhir View garis dengan Text */}

        {/* Awal View Untuk Button */}

        <View style={{ width: windowWidth, marginTop: "8%" }}>
          <TouchableOpacity style={style.BtnGoogle}>
            <Image
              source={require("../../../assets/images/google.png")}
              style={style.imgGoogle}
            ></Image>
            <Text style={style.textGoogle}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: windowWidth, marginTop: "8%" }}>
          <TouchableOpacity style={style.BtnFb}>
            <Image
              source={require("../../../assets/images/facebook.png")}
              style={style.imgFB}
            ></Image>
            <Text style={style.textFb}>Facebook</Text>
          </TouchableOpacity>
        </View>
        {/* Akhir Button */}

        {/* View Untuk Text Sudah Punya Akun */}
        <View
          style={style.viewAccount}
        >
          <Text style={{ fontSize: 15 }}>Sudah punya akun?</Text>
          <Text style={{ fontSize: 15, marginLeft: 5 }}>Silahkan</Text>
          <Text onPress={goLogin} style={style.textMasuk}>
            Masuk
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputName: {
    flexDirection: "row",
    height: 52,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: "-40%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textInputStyle: {
    height: 52,
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignSelf: "center",
  },
  textInput2: {
    flexDirection: "row",
    height: 52,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: "5%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  iconEye: {
    marginVertical: "auto",
    width: "10%",
    flex: 1,
    marginLeft: 11,
  },
  btnDaftar: {
    marginTop: "10%",
    backgroundColor: "#3498DB",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textDaftar: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
  },
  OR: {
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
  garis2: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    color: "grey",
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSignUp: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
  },
  imgSignUp: {
    width: "95%",
    alignSelf: "center",
  },
  BtnGoogle: {
    borderWidth: 2,
    height: 52,
    borderRadius: 10,
    borderColor: "#E74C3C",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  imgGoogle: {
    marginLeft: "3%",
    flex: 0.85,
    width: 33,
    height: 33,
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
  BtnFb: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    borderColor: "#3498DB",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  imgFB: {
    marginLeft: "5%",
    flex: 0.4,
    width: 17,
    height: 37,
    marginVertical: "auto",
  },
  textFb: {
    flex: 8,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "10%",
    color: "#3498DB",
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
  textMasuk: {
    color: "blue",
    marginLeft: 5,
    fontSize: 15,
  },
  viewAccount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    height: 50,
  },
});
