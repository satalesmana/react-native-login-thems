import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native";
import React ,{useState}from "react";
import { MyButton } from "../../component";
import { ICFacebook, ICGoogle, ICApple } from '../../../assets'  


const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");
  const[isSelected,setSelection] = useState(false);

  const goSignup = () => {
    navigation.navigate("Signup");
  };

  const onSubmitLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error("Email is required");
      }

      if (pasword.trim().length === 0) {
        throw Error("Password is required");
      }

      navigation.navigate("Signup");
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

  return (
    <ScrollView style={{backgroundColor:"black"}}>
        <View style={style.whiteCover}>
          <View style={style.lineUp}></View>

      <Text style={style.textLoginStyle}>Welcome Back!</Text>
      <Text style={style.textAccountStyle}>
        Let's login for explore continues
      </Text>

        <View style={{ width: windowWidth, height: 400 }}>
          <View style={style.logo}>
            <Image source={require("../../../assets/images/Logo25.png")} />
            <Text style={style.textGamingStyle}>REXDOUS GAMING</Text>
          </View>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email or Phone Number</Text>

          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 15 }}>
              <Image
                source={require("../../../assets/images/card_email.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder={"Enter your email"}
              placeholderTextColor="#c7c7c7"
              value={email}
            />
          </View>
          <Text style={style.textLabel}>Password</Text>

          <View style={style.boxInput}>
            <View style={{ flex: 1, marginVertical: "auto", marginLeft: 18 }}>
              <Image
                source={require("../../../assets/images/card_pass.png")}
              ></Image>
            </View>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangePassword}
              placeholder={"Enter your password"}
              placeholderTextColor="#c7c7c7"
              value={pasword}
            />
          </View>
              <Text style={style.forget}> forget password</Text>

          </View>
          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Sign in</Text>
          </TouchableOpacity>
        </View>

<View>
  <Text style={style.textViaStyle}>──────── You can Connect with ────────</Text>
</View>
      <View style={style.btnContainer}>
        <View>
        <MyButton
          imgUrl={ICFacebook}/>
            </View>
          <View>
          <MyButton
            imgUrl={ICGoogle}/>
            </View>
            <View>
          <MyButton
            style={{marginLeft:15}}
            imgUrl={ICApple}/>
            </View>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Text>Don't have an account?</Text>
          <Text onPress={goSignup} style={style.textCreate}>
            Sign Up here
          </Text>
        </View>
   
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: -280,
  },
  boxInput: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#F8F7FB",
    borderStyle: "solid",
  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: "red",
    height: 40,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  whiteCover: {
    width: windowWidth,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderRadius : 20, marginTop: 20,
    borderTopLeftRadius: 25,
    height: "167%",
  },
  lineUp: {
    height: 5,
    width: "15%",
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#DFE2EB",
    marginTop: 20,
    marginBottom : 20
  },
  textCreate: {
    fontWeight: "bold",
    width: 100,
    marginLeft:3,
  },
  textInputStyle: {
    padding: 10,
    width: "88%",
  },
  textLoginStyle: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  textAccountStyle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "regular",
    textAlign: "center",
  },
  textGamingStyle: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnContainer1: {
    marginRight:15
  },
  containerdua:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  checkboxContainer:{
    flexDirection:'row',
    paddingHorizontal:20,
    paddingLeft:3,
    paddingRight:3,
    marginBottom:20
  },
  label:{
    marginTop:3
  },
  forget:{
    marginTop: 3,
    alignSelf:"flex-end",
    color: "red"
  },
  textViaStyle:{
    textAlign:'center',
    alignContent: "center",
    alignSelf: "center",
    textAlign:"center",
  }
});
