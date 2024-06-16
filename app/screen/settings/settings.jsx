import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword,resetSettingData } from "../../store/reducer/settingReducer";
import { clerAuth } from "../../store/reducer/authReducer";
import ApiLib from "../../lib/ApiLib";

const windowWidth = Dimensions.get("window").width;

export default function SettingScreen({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const setting = useSelector((state) => state.setting.formInput);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const changepass = () => {
    
    try {
      if (!setting.email) throw Error("Email is required");
      if (!setting.password) throw Error("Password is required");
      if (setting.password === confirmPassword)
      {
        let message = `Email : ${setting.email}\n`
            message += `Password : ${setting.password}\n`;
        Alert.alert("Confirm", message, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Submit",
            onPress: async () => {
              const res = await ApiLib.post("/action/updateOne", {
                "dataSource": "Cluster0",
                "database": "kelompok9",
                "collection": "users",
                "filter" : {"_id" : setting.id} ,
                "update" : {"$set" : {"password" : setting.password}}
              });
              if (res.data?.modifiedCount>0) {
                dispatch(resetSettingData());
                navigation.navigate("Login");
              }
            },
          },
        ]);

      }else{
        alert("Password is required")
      }
    } catch (err) {
      Alert.alert("Error", err.message, [{ text: "OK" }]);
    }
 
  }
      
  const onLogout = () => {
    dispatch(clerAuth());
    navigation.replace("Login");

    
  };

  return (
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
            source={require("../../../assets/images/AI.png")}
            style={{ width: 90, height: 90, borderRadius: 50 }}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontFamily: "Roboto",
                textAlign: "left",
              }}
            >
              {auth.firstName} {auth.lastName}
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
            <TouchableOpacity
              style={{
                backgroundColor: "#E4E7EB",
                width: 200,
                height: 30,
                justifyContent: "center",
              }}
              onPress={onLogout}
              title="Log Out"
            >
              <Text style={{ color: "black", alignSelf: "center" }}>
                Log Out
              </Text>
            </TouchableOpacity>
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
        <Text style={{marginLeft:15,marginRight:200,marginBottom:10,fontWeight:'bold'}}>Email Address</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={setting.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Email"
            placeholderTextColor="black"
          />
        </View>
        <Text style={{marginLeft:15,marginRight:200,marginBottom:10,fontWeight:'bold'}}>New Password</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={setting.password}
            onChangeText={(value) => dispatch(setPassword(value))}
            placeholder="Password"
            placeholderTextColor="black"
          />
        </View>
        <Text style={{marginLeft:11,marginRight:179,marginBottom:10,fontWeight:'bold'}}>Confirm Password</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={confirmPassword}
            // onChangeText={setConfirmPassword}
            onChangeText={(value) =>setConfirmPassword(value)}
            placeholder="Enter your confirm password"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2F4EFF",
            padding: 10,
            width: 100,
            borderRadius: 10,
            width: 200,
          }}
          onPress={changepass}
          title="Log Out"
        >
          <Text style={{ color: "white", alignSelf: "center" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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