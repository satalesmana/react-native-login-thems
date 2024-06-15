import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { MyButton } from "../components";
import { ICGoogle } from "../../../assets";
import React, { useState } from "react";
import ApiLib from "../../lib/Apilib";

const windowWidth = Dimensions.get("window").width;
export default function LoginScreen({ navigation }) {
  const [nama, onChangeNama] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [loading, setLoading] = React.useState(false); // Changed from "false" to false


  const onSubmitLogin = async () => {
    setLoading(true);
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (password.trim().length === 0) {
        throw Error("Password is required");
      }

      const res = await ApiLib.post("/action/findOne", {
        dataSource: "Cluster0",
        database: "lp3i-mobile",
        collection: "users",
        filter: {
          email: email,
          password: password,
        },
      });

      setLoading(false);
      if (res.data.document != null) {
        navigation.replace("Main");
      } else {
        Alert.alert("Error", "Username & Password tidak sesuai", [
          {
            text: "OK",
            onPress: () => {
              console.log("ERR");
            },
          },
        ]);
      }
    } catch (err) {
      setLoading(false);
      Alert.alert("Error", err.message, [
        {
          text: "OK",
          onPress: () => {
            console.log("ERR");
          },
        },
      ]);
    }
  };

  const onRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView>
      <View>

        <Text style={style.textLoginStyle}>Login</Text>
        <Text style={style.Welcometothebacktotheapp}>
          Welcome to the back to the app
        </Text>

        <View style={style.containter}>
          <Text style={style.textLabel}>Email Addres</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangeEmail}
            placeholder="Enter your email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />
          <Text
            style={[
              style.textForgetStyle,
              { textAlign: "right", color: "blue" },
            ]}
          >
            Forget password ?
          </Text>
          <Text style={style.textLabel}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="***********"
            placeholderTextColor="#c7c7c7"
            value={password}
          />
        </View>

        <View style={style.containerdua}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{borderRadius:10}}
          />
          <Text style={style.signText}>Keep me Signed in</Text>
        </View>

        <View style={style.buttonStyle}>
          <Button
            onPress={onSubmitLogin}
            color="blue"
            title="Login"
            titleStyle={{ borderRadius: 10 }}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              color: "grey",
            }}
          >
            ──────── Or Sign in with ────────
          </Text>
        </View>

        <View style={style.btnContainer}>
          <MyButton text="Continue with google" imgUrl={ICGoogle} />
        </View>
        <Text
          style={[
            style.textCreateStyle,
            {
              textAlign: "center",
              color: "blue",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 30,
            },
          ]}
          onPress={onRegister}
        >
          Create new account
        </Text>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  welcomeStyle: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  signText:{
marginHorizontal:10,
paddingVertical:8
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor:'#0000FF',
    width:"90%",
    alignContent:"center",
    justifyContent:"center",
    alignSelf:"center"
  },
  containter: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  containerdua: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 35,
    alignItems: "baseline",
  },

  textLoginStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  Welcometothebacktotheapp: {
    marginLeft: 20,
  },
});