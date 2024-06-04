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
import { CustomeInput } from "../../component";
import { setEmail, setPassword, setConfirmPassword } from "../../store/reducer/registerReducer";
import { useSelector, useDispatch } from 'react-redux'

const windowWidth = Dimensions.get("window").width;

export default function SignUpScreen({ navigation }) {
  const register = useSelector((state) => state.register.formInput)
  const dispatch = useDispatch()

  const [email, onChangeEmail] = React.useState("");

  // State variable to hold the password
  // const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // State variable to track password visibility
  // const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Function to toggle the password visibility state
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView backgroundColor='white'>
      <View>
        <Text style={style.header}>Sign Up</Text>

        {/* Awal Textinput Nama */}
        <View style={style.Inputan}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            onChangeText={onChangeEmail}
            placeholder="Email Address"
            // placeholderTextColor="black"
            value={email}
          />
        </View>
        {/* <View style={style.Input2}>
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
        </View> */}

        <View style={style.Input2}>
          <CustomeInput value={register.setPassword} onChangeText={(value) => dispatch(setPassword(value))} />
          {/* <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
            style={style.iconEye}
            onPress={toggleShowPassword}
          /> */}
        </View>

        <View style={style.Input3}>
          <TextInput
            style={[style.textInputStyle, { flex: 8 }]}
            secureTextEntry={!showPassword2}
            onChangeText={setPassword2}
            placeholder="Confirm Password"
            // placeholderTextColor="#c7c7c7"
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

        <TouchableOpacity
          // onPress={onSubmitLogin}
          style={style.buttonLogin}
        >
          <Text style={style.textSignUp}>Sign Up</Text>
        </TouchableOpacity>

        <View style={style.viewAccount}>
          <Text style={{ fontSize: 15 }}>Have an account?</Text>
          <Text onPress={goLogin} style={style.textSignIn}>
            Sign In
          </Text>
        </View>

        <View style={style.viewOR}>
          <View style={style.garis} />
          <View>
            <Text style={style.textOR}>OR</Text>
          </View>
          <View style={style.garis} />
        </View>

        <TouchableOpacity style={style.btnFb}>
          <Image
            source={ICGoogle}
            style={{ marginLeft: "3%", marginVertical: "auto" }}
          ></Image>
          <Text style={style.textFG}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnFb}>
          <Image
            source={ICFacebook}
            style={{ marginLeft: "4%", marginVertical: "auto" }}
          ></Image>
          <Text style={style.textFG}>Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  textFG: {
    flex: 8,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "3%",
  },
  btnFb: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: "10%",
  },
  textInputStyle: {
    height: 52,
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignSelf: "center",
  },
  buttonLogin: {
    marginTop: "7%",
    backgroundColor: "#F71B33",
    height: 56,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textSignUp: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
  },
  viewAccount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    height: 50,
  },
  textOR: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  garis: { flex: 1, height: 1, backgroundColor: "#DEDEDE" },
  viewOR: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    width: "90%",
    alignSelf: "center",
  },
  textSignIn: { color: "#EA4335", marginLeft: 5, fontSize: 15 },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "8%",
  },
  Inputan: {
    flexDirection: "row",
    height: 56,
    borderColor: "grey",
    backgroundColor: "#FFF6F5",
    padding: 10,
    marginTop: "8%",
    width: windowWidth - 0.15 * windowWidth,
    alignSelf: "center",
    borderRadius: 10,
  },
  Input2: {
    flexDirection: "row",
    height: 56,
    borderColor: "grey",
    backgroundColor: "#FFF6F5",
    padding: 10,
    // borderWidth: 1,
    marginTop: "5%",
    width: windowWidth - 0.15 * windowWidth,
    alignSelf: "center",
    borderRadius: 10,
  },
  Input3: {
    flexDirection: "row",
    height: 56,
    borderColor: "grey",
    backgroundColor: "#FFF6F5",
    padding: 10,
    // borderWidth: 1,
    marginTop: "5%",
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
  },
  iconEye: {
    marginVertical: "auto",
    width: "10%",
    flex: 1,
    marginLeft: 11,
  }
});
