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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ICGoogle, ICFacebook, ICTwitter } from "../../../assets";
import { MyButton } from "../../components";
import React from "react";
import ApiLib from "../../lib/ApiLib"
const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
<<<<<<< HEAD
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, setLoading] = React.useState("false");
  const onSubmitLogin = async () => {
    setLoading(true);
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (pasword.trim().length === 0) {
        throw Error("Password is required");
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
      if (res.data.document != null) {
        navigation.replace("Home");
      } else {
        Alert.alert("Error", "Username & password tidak sesuai", [
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

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="small" color="#0000ff" />
  //     </View>
  //   );
  // }
=======
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const onSubmitLogin =async ()=>{
    setLoading(true)
    try{
      if(email.trim().length === 0 ){
        throw Error('Email is required')
      }

      if(pasword.trim().length === 0 ){
        throw Error('Password is required')
      }

      const res =  await ApiLib.post('/action/findOne',{
              "dataSource": "Cluster0",
              "database": "uasghw",
              "collection": "users",
              "filter": {
                "email": email,
                "password": pasword
              }
          }
      )
      setLoading(false)
      if(res.data.document != null){
        navigation.replace("Home")
      }else{
        Alert.alert('Error', "Username & password tidak sesuai", [
          {text: 'OK', onPress: () => {
            console.log('ERR')
          }},
        ]);
      }
      

    }catch(err){
      setLoading(false)
      Alert.alert('Error', err.message, [
        {text: 'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  }


  const onRegister=()=>{
    navigation.navigate("Welcome")
  }

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
>>>>>>> 220dd1e6b4f8e87e28818da22d0be0e155852a22

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.welcomeBack}>Welcome Back!</Text>
      <View style={style.brandStyle}>
        <Image source={require("../../../assets/images/home.png")} />
      </View>
      <View style={style.inputContainer}>
        <View style={style.inputView}>
          <Icon
            name="envelope"
            size={15}
            color="blue"
            style={style.imgStyleLeft}
          />
          <TextInput
<<<<<<< HEAD
            style={style.inputText}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter your email"
=======
            style={style.inputText}onChangeText={onChangeEmail}
            placeholder="Enter your email or username"
>>>>>>> 220dd1e6b4f8e87e28818da22d0be0e155852a22
            placeholderTextColor="black"
          />
          <Icon
            name="check"
            size={18}
            color="blue"
            style={(style.imgStyleRight, { marginRight: 2 })}
          />
        </View>
        <View style={style.inputView}>
          <Icon name="lock" size={18} color="blue" style={style.imgStyleLeft} />
          <TextInput
<<<<<<< HEAD
            style={style.inputText}
            onChangeText={onChangePassword}
            value={password}
=======
            style={style.inputText}onChangeText={onChangePassword}
>>>>>>> 220dd1e6b4f8e87e28818da22d0be0e155852a22
            placeholder="Enter your password"
            placeholderTextColor="black"
          />
          <Icon name="eye" size={15} color="#000" style={style.imgStyleLeft} />
        </View>
      </View>
      <View style={style.forgotView}>
        <Text style={style.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={style.buttonView}>
        <Pressable style={style.buttonLogin} onPress={onSubmitLogin}>
          <Text style={style.text}>Login</Text>
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
        Don't have an account?{" "}
        <Text style={style.linkRegister} onPress={onRegister}>
          Register Now
        </Text>
      </Text>
      {/* <Text style={style.accountText}>
        By signing up, you are agree with our{" "}
        <Text
          style={style.linkRegister}
          onPress={() => navigation.navigate("Home")}
        >
          Terms & Conditions
        </Text>
      </Text> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 25,
  },
  welcomeBack: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "rgba(29,34,38,1)",
    marginBottom: 25,
  },
  brandStyle: {
    marginTop: 50,
    marginBottom: 70,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    gap: 10,
    width: "150%",
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
  forgotView: {
    alignSelf: "flex-end",
    marginRight: 55,
    marginTop: 2,
    marginBottom: 20,
  },
  forgotPassword: {
    color: "black",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "300",
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
