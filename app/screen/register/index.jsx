import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setEmail,
  setPassword,
  resetRegisterData,
} from "../../store/reducer/registerReducer";
import { ICGoogle, ICFacebook, ICTwitter } from "../../../assets";
import { MyButton } from "../../components";
import ApiLib from "../../lib/ApiLib";

export default function RegisterScreen({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const register = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const [showPass, setShowPassword] = React.useState(true);
  const [showConfPass, setShowConfPassword] = React.useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPass);
  };
  const handleShowConfPassword = () => {
    setShowConfPassword(!showConfPass);
  };

  const onNextInput = () => {
    try {
      if (!register.firstName) throw Error("Name is required");
      if (!register.email) throw Error("Email is required");
      if (!register.password) throw Error("Password is required");
      if (!confirmPassword) throw Error("Confirm Password is required");
      if (confirmPassword !== register.password)
        throw Error("Confirm password doesn't match");

      const message = `Name : ${register.firstName}\nEmail : ${register.email}\nPassword : ${register.password}\n`;

      Alert.alert("Confirm", message, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: async () => {
            const res = await ApiLib.post("/action/insertOne", {
              dataSource: "Cluster0",
              database: "uasghw",
              collection: "users",
              document: register,
            });
            if (res.data?.insertedId) {
              dispatch(resetRegisterData());
              navigation.navigate("Login");
            }
          },
        },
      ]);
    } catch (err) {
      Alert.alert("Error", err.message, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.welcomeBack}>Register</Text>
      <View style={style.brandStyle}>
        <Image source={require("../../../assets/images/home.png")} />
      </View>
      <View style={style.inputContainer}>
        <View style={style.inputView}>
          <Icon name="user" size={20} color="blue" style={style.imgStyleLeft} />
          <TextInput
            style={style.inputText}
            value={register.firstName}
            onChangeText={(value) => dispatch(setFirstName(value))}
            placeholder="Enter your name"
            placeholderTextColor="black"
          />
          <Icon
            name="check"
            size={22}
            color="blue"
            style={(style.imgStyleRight, { marginRight: -2 })}
          />
        </View>
        <View style={style.inputView}>
          <Icon name="mail" size={20} color="blue" style={style.imgStyleLeft} />

          <TextInput
            style={style.inputText}
            value={register.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Enter your email"
            placeholderTextColor="black"
          />
          <Icon
            name="check"
            size={22}
            color="blue"
            style={(style.imgStyleRight, { marginRight: -2 })}
          />
        </View>
        <View style={style.inputView}>
          <Icon name="lock" size={18} color="blue" style={style.imgStyleLeft} />
          <TextInput
            style={style.inputText}
            value={register.password}
            onChangeText={(value) => dispatch(setPassword(value))}
            placeholder="Enter your password"
            placeholderTextColor="black"
            secureTextEntry={showPass}
          />
          <Icon
            name={showPass === true ? "eye-off" : "eye"}
            size={20}
            color="#000"
            style={style.imgStyleLeft}
            onPress={() => handleShowPassword()}
          />
        </View>
        <View
          style={{
            gap: 10,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Icon name="lock" size={20} color="blue" style={style.imgStyleLeft} />
          <TextInput
            style={style.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Enter your confirm password"
            placeholderTextColor="black"
            secureTextEntry={showConfPass}
          />
          <Icon
            name={showConfPass === true ? "eye-off" : "eye"}
            size={20}
            color="#000"
            style={style.imgStyleLeft}
            onPress={() => handleShowConfPassword()}
          />
        </View>
      </View>
      <View style={style.buttonView}>
        <Pressable style={style.buttonLogin} onPress={onNextInput}>
          <Text style={style.text}>Register</Text>
        </Pressable>
        <View style={style.viewVia}>
          <Text style={style.orVia}> Or Via Social Media </Text>
        </View>
        <View style={style.btnContainer}>
          <MyButton imgUrl={ICGoogle} />
          <MyButton imgUrl={ICFacebook} />
          <MyButton imgUrl={ICTwitter} />
        </View>
      </View>
      <Text style={style.accountText}>
        Already have an account?{" "}
        <Text
          style={style.linkRegister}
          onPress={() => navigation.navigate("Login")}
        >
          Login Now
        </Text>
      </Text>
      <Text style={style.accountText}>
        By signing up, you are agree with our{" "}
        <Text
          style={style.linkRegister}
          onPress={() => navigation.navigate("Home")}
        >
          Terms & Conditions
        </Text>
      </Text>
    </ScrollView>
  );
}

const style = StyleSheet.create({
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
    marginBottom: 10,
  },
  inputView: {
    gap: 10,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imgStyleLeft: {
    width: 20,
    height: 20,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  imgStyleRight: {
    width: 16,
    height: 18,
    marginRight: 10,
  },
  buttonView: {
    alignItems: "center",
    marginBottom: 10,
  },
  buttonLogin: {
    borderRadius: 50,
    backgroundColor: "#1F59B6",
    paddingVertical: 8,
    paddingHorizontal: 32,
    elevation: 3,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  viewVia: {
    alignContent: "center",
    marginTop: 35,
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  orVia: {
    color: "black",
    fontSize: "15",
    fontFamily: "Roboto",
    fontWeight: "100",
  },
  btnContainer: {
    flexDirection: "row",
    paddingHorizontal: 125,
    paddingBottom: 20,
  },
  accountText: {
    color: "black",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
  },
  linkRegister: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
});
