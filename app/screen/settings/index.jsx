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
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setEmail,setPassword } from "../../store/reducer/settingReducer";
import { clearAuth } from "../../store/reducer/authReducer";
import ApiLib from "../../lib/Apilib";


const windowWidth = Dimensions.get('window').width;

export default function SettingScreen({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const setting  = useSelector((state) => state.setting.formInput);
  const auth = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const onLogout=()=>{
    dispatch(clearAuth())
    navigation.replace("Login")
  
    try {
      if (!setting.email) throw Error("Email is required");
      if (!setting.password) throw Error("Password is required");
      if (!setting.password === confirmPassword) throw Error("Password is required");
        throw Error("Confirm password doesn't match");

        const message = `Email : ${setting.email}\n
        Password : ${setting.password}\n`;

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
              database: "lp3i-mobile",
              collection: "users",
              document: register,
            });
            if (res.data?.insertedId) {
              dispatch(resetSettingData());
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
      <View>
      <View style={{ width: windowWidth }}>
      <View style={[style.container, { borderWidth: 1, margin: 10, marginTop:-0.20,backgroundColor: "white", flexDirection: "row" }]}>
      <Image source={require('../../../assets/images/AI Avatars.png')}style={{ width: 100, height: 100, marginLeft: -0.100 }} />
      <View style={{alignItems:"center",width:240, marginLeft:-20}}>
      <Text style={{}}>{auth.firstName}</Text>
      <Text style={{}}>{auth.email}</Text>
       <TouchableOpacity style={{ backgroundColor: "#E4E7EB", padding: 10, width:100 }}
       onPress={onLogout} title='Log Out' >
       <Text style={{ color: "black", alignSelf: "center"  }}>LogOut</Text>
      </TouchableOpacity>
      </View>
       </View>
      <View style={[style.inputContainer,{borderWidth:1,margin:10,backgroundColor:"white",height:300}]}>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            value={setting.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Email"
            placeholderTextColor="black"
          />
         
        </View>
  
        <View style={style.inputView}>
          

          <TextInput
            style={style.inputText}
            value={setting.password}
            onChangeText={(value) => dispatch(setPassword(value))}
            placeholder="Password"
            placeholderTextColor="black"
          />
          
        </View>
        <View style={style.inputView}>
         
          <TextInput
            style={style.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Enter your confirm password"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={{ backgroundColor: "#2F4EFF", padding: 10, width:100,borderRadius:10,width:200 }}
       onPress={onLogout} title='Log Out' >
       <Text style={{ color: "black", alignSelf: "center"  }}>Submit</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      </View>
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
    borderWidth:1
  },
  imgStyleLeft: {
    width: 20,
    height: 20,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,  
    padding:10

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
