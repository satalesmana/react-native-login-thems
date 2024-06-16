import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MyButton2, MyButton3 } from "../../components/my_button";
import { setEmail, setPassword, resetSettingData } from "../../store/reducer/settingsReducer";
import { clearAuth } from "../../store/reducer/authReducer";
import ApiLib from "../../lib/Apilib";

const windowWidth = Dimensions.get("window").width;

export default function SettingsScreen({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const settings = useSelector((state) => state.settings.formInput);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(clearAuth());
    navigation.replace("login");
  }

  const onNextInput = () =>{
    try {
      if (!settings.email) throw Error("Email is required");
      if (!settings.password) throw Error("Password is required");
      if (!settings.password === confirmPassword)
      throw Error("Confirm password doesn't match");

      const message = `Email : ${settings.email}\n
        Password : ${settings.password}\n`;

      Alert.alert("Confirm", message, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: async () => {
            const res = await ApiLib.updateUser("/action/insertOne", {
              dataSource: "Cluster0",
              database: "lp3i-mobile",
              collection: "users",
              document: register,
            });
            if (res.data?.updateUser) {
              dispatch(resetSettingData());
              navigation.navigate("login");
            }
          },
        },
      ]);
    } catch (err) {
      Alert.alert("Error", err.message, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView>
    <View>
      <View
        style={[
          style.container,
          {
            margin: 10,
            backgroundColor: "white",
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{
            gap: 10,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            marginTop: 25,
          }}
        >
          <Image
            source={require("../../../assets/images/person.png")}
            style={{ width: 90, height: 90, marginBottom:30}}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
            }}
          >
            <Text
              style={[{
                color: "black",
                fontSize: 25,
                fontFamily: "Roboto",
                textAlign: "left",
                marginRight:30
              }]}
            >
             {auth.firstName} {auth.sureName}
            </Text>

            <Text
              style={{
                color: "black",
                fontWeight: "100",
                fontSize: 15,
                textAlign: "left",
                marginBottom: 20,
              }}
            >
              {auth.email}
            </Text>

        <MyButton3 style={[{ height:50, width:200, marginLeft:-25}]} onPress={onLogout} text="Logout"/>
          </View>
        </View>
      </View>
      <View
        style={[
          style.inputContainer,
          {
            margin: 10,
            backgroundColor: "white",
            height: "70%",
          },
        ]}
      >
        <Text style={{marginRight:150,marginBottom:10,fontWeight:'bold'}}>Email Address</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={settings.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Masukkan Email Anda"
            placeholderTextColor="silver"
          />
        </View>
        <Text style={{marginRight:150,marginBottom:10,fontWeight:'bold'}}>New Password</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={settings.password}
            onChangeText={(value) => dispatch(setPassword(value))}
            placeholder="Masukkan Password baru Anda"
            placeholderTextColor="silver"
          />
        </View>
        <Text style={{marginRight:130,marginBottom:10,fontWeight:'bold'}}>Confirm Password</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Ulangi password yang baru"
            placeholderTextColor="silver"
          />
        </View>
          <MyButton2 style={[{width:250,marginBottom:100 ,marginTop:20}]} onPress={onNextInput} text="Reset Password"/>
      </View>
    </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  welcomeBack: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "rgba(29,34,38,1)",
    marginBottom: 20,
  },
  inputContainer: {
    padding: 35,
    alignItems: "center",
  },
  inputView: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
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
  buttonRegist: {
    borderRadius: 50,
    backgroundColor: "#9322C8",
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
    color: "purple",
    textDecorationLine: "underline",
  },
});