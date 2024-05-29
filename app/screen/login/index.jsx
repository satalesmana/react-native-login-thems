import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  borderBottomColor,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");
  const [number, onChangeNumber] = React.useState('');
  const onSubmitLogin = () => {
    alert(email);
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 50 }}>
          
          

          <View style={style.UserStyle1}>
            <Text style={[style.LoginStyle]}>Login</Text>
            <Image source={require("../../../assets/images/User.png")} />
          </View>

          <Text style={style.welcomebackStyle}>
            Welcome back , Rohit thakur
          </Text>

          <View style={style.gambarStyle}>
            <Image source={require("../../../assets/images/gambar.png")} />
          </View>

          <Text
            style={[
              style.textEnterStyle,
              {
                fontSize: 17,
                textAlign: "center",
                color: "#F2796B",
                fontWeight: "bold",
              },
            ]}
          >
            Enter Your Mobile Number
          </Text>

          <View>
        <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeNumber}
            placeholder='Enter Number'
            value={number}
            keyboardType="numeric"/>
          </View>

          <Text
            style={style.ChangeNumberStyle}>
            Change Number?
          </Text>
          <TouchableOpacity
          onPress={{}} style={style.buttonlogin}>
            <Text style={style.title}>Login</Text>
          </TouchableOpacity>
            <Text style={style.OrLoginWith}>------------  Or Login With  ------------</Text>


            <View style={{width:300, alignSelf:'center'}}>
            <TouchableOpacity
          onPress={{}} style={{height:25, flexDirection:'row',alignSelf:'center'}}>
            <Image source={require('../../../assets/images/icons_google.png')} style={{width:20,height:20,marginVertical:'auto'}}>

            </Image>
            <Text style={{fontSize:20}}>Login</Text>
          </TouchableOpacity>
            </View>


            <View>
            <Text style={style.YouDonthaveanaccountSignup}>You Don't have an account ? <b>Sign up</b></Text>
            </View>

            </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  gambarStyle: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonlogin:{
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#F2796B",
    borderRadius: 10,
  },
  // Button Login
  title:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    fontSize: 15,
  },
  UserStyle1: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  LoginStyle: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 5,
  },
  welcomebackStyle: {
    fontSize: 11,
    marginTop: 20,
    marginLeft: 20,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  ChangeNumberStyle: {
    fontSize: 11,
    textAlign: "right",
    marginRight:30,
    color:'#757171',
  },
  
  ContainerLoginStyle: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#F2796B",
    borderRadius: 10,
  },
  OrLoginWith: {
    textAlign:'center',
    marginTop: 10 ,
    color:'#757171',
  },
  YouDonthaveanaccountSignup:{
    textAlign:'center',
    marginTop: 70,
    color:'#757171',
  },
  Signup:{
    fontWeight:'bold',
  },
});
