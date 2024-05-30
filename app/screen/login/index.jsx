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

export default function LoginScreen({ navigation }) {
  
  const [number, onChangeNumber] = React.useState("");
  const onSubmitLogin = () => {
    navigation.navigate("Register");
    alert(email);
  };
  const goVerifikasi = () => {
    navigation.navigate("Register");

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
              placeholder="Enter Number"
              value={number}
              keyboardType="numeric"
            />
          </View>

          <Text style={style.ChangeNumberStyle}>Change Number?</Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 40,
              width: "93%",
              alignSelf: "center",
              borderRadius: 10,
              backgroundColor: "#F2796B",
            }}
            onPress={goVerifikasi}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginVertical: "auto",
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <Text style={style.OrLoginWith}>
          ──────── Or Login With ────────
          </Text>

         
            <TouchableOpacity
              onPress={{}}
              style={{ height: 25, flexDirection: "row", alignSelf: "center", justifyContent:'center', marginTop:50 }}
            >
              <View style={{}}>
              <Image
                source={require("../../../assets/images/icons_google.png")}
                style={{marginVertical: "auto"}}
              ></Image>
              </View>

              <Text
                style={{ fontSize: 16  , marginLeft:4 }}
                onPress={() => navigation.navigate("Register")}
              >
                Google
              </Text>
            </TouchableOpacity>


     <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Text>Don't have an account?</Text>
        <Text style={style.textCreate}>
          Sign Up
        </Text>
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
  
  
  // Button Login
  title: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
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
    marginRight: 30,
    color: "#757171",
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
    textAlign: "center",
    marginTop: 50,
    marginBottom: 40,
    color: "#A39797",
  },
  textCreate: {
    fontWeight: "bold",
    width: 100,
    marginLeft: 3,
    color:'red'
  },
  
});
