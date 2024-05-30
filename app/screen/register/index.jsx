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

export default function RegisterScreen({navigation}) {
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View>


        <View style={{ flex: 1 }}>
          <Text style={style.verifikasi}>Verification Code</Text>
        </View>


        <View>
            <Text style={style.wehave}>We have sent the Verification</Text>
        </View>

        <View>
            <Text style={style.codetoyour}>code to your email address</Text>
        </View>

       <View style={style.container}>
        <View style={style.textInputStyle}>
        <TextInput style={{gap : 10, marginHorizontal : 3, borderColor : "black", width : 50, height : 50, borderWidth : 1.4, borderRadius : 10, textAlign : "center" }}placeholder="8"/>
        <TextInput style={{gap : 10, marginHorizontal : 3, borderColor : "black", width : 50, height : 50, borderWidth : 1.4, borderRadius : 10, textAlign : "center" }}placeholder="5"/>
        <TextInput style={{gap : 10, marginHorizontal : 3, borderColor : "#F2796B", width : 50, height : 50, borderWidth : 1.4, borderRadius : 10, textAlign : "center" }}placeholder="2"/>
        <TextInput style={{gap : 10, marginHorizontal : 3, borderColor : "black", width : 50, height : 50, borderWidth : 1.4, borderRadius : 10, textAlign : "center" }}placeholder=""/>
        </View>
       </View>

       <TouchableOpacity
            style={{
              marginTop: 50,
              height: 40,
              width: "93%",
              alignSelf: "center",
              borderRadius: 10,
              backgroundColor: "#F2796B",
            }}
            onPress={goHome}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginVertical: "auto",
                color: "white",
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  verifikasi: {
    marginTop: 50,
    fontWeight: "600",
    marginLeft: 20,
    fontSize: 22,
    fontStyle: "bold",
  },

  wehave:{
    marginLeft: 20,
    color:'#B6B6B6',
    fontSize: 18,
  },

  codetoyour:{
    marginLeft: 20,
    color:'#B6B6B6',
    fontSize: 18,
  },

 textInputStyle:{
    justifyContent:'space-evenly',
    marginTop:40,
    flexDirection:'row',
    alignItems:"center",
    alignContent: "center",
    alignSelf: "center",

 },

 container:{
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center" },
    textinput:{
}
});
