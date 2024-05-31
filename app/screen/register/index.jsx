import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { MyButton } from "../../components";
import { ICFacebook, ICGoogle, ICApple } from "../../../assets";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function RegisterScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");
  const [confirm_pasword, onConfirmPassword] = React.useState("");

  const onSubmitLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (pasword.trim().length === 0) {
        throw Error("Password is required");
      }

      if (confirm_pasword.trim().length === 0) {
        throw Error("Password");
      }

      navigation.navigate("Home");
    } catch (err) {
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

  const onSubmitAccount = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 150 }}>
          <Text style={style.textLoginStyle}>Sign Up</Text>
          <Text style={style.textLoginStyle2}>
          Sign up to enjoy the feature of Revolutie
          </Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}></Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="Yourname"
            placeholderTextColor="gray"
            value={email}
          />

          <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
          <TextInput
            style={[style.textInputStyle]}
            onChangeText={onChangePassword}
            placeholder="Dateofbirth"
            placeholderTextColor="gray"
            value={pasword}
          />

          <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
          <TextInput
            style={[style.textInputStyle]}
            onChangeText={onConfirmPassword}
            placeholder="Email"
            placeholderTextColor="gray"
            value={confirm_pasword}
          />

          <TextInput
            style={[style.textInputStyle]}
            onChangeText={onConfirmPassword}
            placeholder="Password"
            placeholderTextColor="gray"
            value={confirm_pasword}
          />

          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={style.textContinueStyle2}>Or continue with</Text>
        <View style={style.btnContainer}>
          <View>
            <MyButton style={style.btnContainer1} imgUrl={ICGoogle} />
          </View>
          
        </View>
        <Text onPress={onSubmitAccount} style={style.textContinueStyle}>
          Already have an account?Sign in
        </Text>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 62,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  textForgot: {
    marginTop: 5,
    textAlign: "right",
    padding: 15,
    color: "#1F41BB",
    fontWeight: "bold",
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 60,
    marginLeft:25 ,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'#000000',
  
  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
    fontSize: 18,
  },
  buttonLogin: {
    backgroundColor: "#367AFF",
    height: 60,
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 40,
  },
  textLoginStyle2: {
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'left',
    width:240,
    marginLeft:25,
    alignSelf: 'left',
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
    justifyContent: "center",
  },
  btnContainer1: {
    marginRight: 15,
  },
  textContinueStyle: {
    textAlign: "center",
    marginBottom: 70,
  },
  textContinueStyle2: {
    textAlign: "center",
    color: "#1F41BB",
    fontWeight: "bold",
    marginBottom: 5,

  },
  containerBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,

  },
});
