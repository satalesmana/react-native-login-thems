import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import ApiLib from "../../lib/ApiLib";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { MyButton } from "../../components";
import {
  setAuthData,
  setNim,
  setEmail,
  setFirstName,
  setProgramStudy,
  setKodeKelas,
  setTelp,
} from "../../store/reducer/authReducer";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPass);
  };

  const onSubmitLogin = async () => {
    setLoading(true);
    try {
      if (email.trim().length === 0) {
        throw new Error("Email is required");
      }

      if (password.trim().length === 0) {
        throw new Error("Password is required");
      }

      const res = await ApiLib.post("/action/findOne", {
        dataSource: "Cluster0",
        database: "uasghw",
        collection: "users",
        filter: {
          email: email,
          password: password,
        },
      });

      setLoading(false);
      if (res.data?.document) {
        const userData = res.data.document;
        dispatch(setAuthData(userData));
        dispatch(setFirstName(userData.firstName));
        dispatch(setEmail(userData.email));
        dispatch(setNim(userData.nim));
        dispatch(setProgramStudy(userData.programStudy));
        dispatch(setKodeKelas(userData.kodeKelas));
        dispatch(setTelp(userData.telp));
        navigation.replace("Main");
      } else {
        Alert.alert("Error", "Username & Password tidak sesuai");
      }
    } catch (err) {
      setLoading(false);
      Alert.alert("Error", err.message);
    }
  };

  const onRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeBack}>Welcome Back!</Text>
      <View style={styles.brandStyle}>
        <Image
          source={require("../../../assets/images/first.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Icon
            name="mail"
            size={20}
            color="purple"
            style={styles.imgStyleLeft}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={setEmailState}
            value={email}
            placeholder="Enter your email"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            name="lock"
            size={20}
            color="purple"
            style={styles.imgStyleLeft}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={setPasswordState}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor="black"
            secureTextEntry={showPass}
          />
          <Icon
            name={showPass ? "eye-off" : "eye"}
            size={20}
            color="purple"
            onPress={handleShowPassword}
          />
        </View>
      </View>
      <Pressable
        disabled={loading}
        style={styles.buttonLogin}
        onPress={onSubmitLogin}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.text}>Login</Text>
        )}
      </Pressable>
      <View style={styles.viewVia}>
        <Text style={styles.orVia}>Or Via Social Media</Text>
      </View>
      <View style={styles.btnContainer}>
        {/* Replace MyButton with your actual component */}
        <MyButton imgUrl={require("../../../assets/images/google.png")} />
        <MyButton imgUrl={require("../../../assets/images/facebook.png")} />
        <MyButton imgUrl={require("../../../assets/images/twitter.png")} />
      </View>
      <Text style={styles.accountText}>
        Don't have an account?{" "}
        <Text style={styles.linkRegister} onPress={onRegister}>
          Register Now
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 35,
  },
  welcomeBack: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "rgba(29,34,38,1)",
    marginBottom: 20,
  },
  brandStyle: {
    marginTop: 25,
    marginBottom: 50,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "purple",
  },
  imgStyleLeft: {
    width: 20,
    height: 20,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    color: "black",
  },
  buttonLogin: {
    borderRadius: 50,
    backgroundColor: "#9322C8",
    paddingVertical: 8,
    paddingHorizontal: 32,
    elevation: 3,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  viewVia: {
    marginTop: 50,
    marginBottom: 10,
    alignItems: "center",
  },
  orVia: {
    fontSize: 15,
    fontWeight: "100",
    color: "black",
    fontFamily: "Roboto",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 60,
    marginBottom: 50,
  },
  accountText: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: 20,
  },
  linkRegister: {
    fontSize: 14,
    color: "purple",
    textDecorationLine: "underline",
  },
});
