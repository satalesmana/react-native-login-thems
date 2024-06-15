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
  TouchableOpacity,
} from "react-native";
import { MyButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setEmail,setPassword } from "../../store/reducer/settingReducer";
import { clerAuth } from "../../store/reducer/authReducer";
import ApiLib from "../../lib/Apilib";
import React, { useState } from "react";

const windowWidth = Dimensions.get("window").width;

export default function SettingsScreen({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const settings = useSelector((state) => state.settings.formInput);
  const auth = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const onLogout = () => {
      dispatch(clerAuth())
      navigation.replace("Login")
    try {
      if (!settings.email) throw Error("Email is required");
      if (!settings.password) throw Error("Password is required");
      if (!settings.password === confirmPassword) throw Error("Password is required");
      
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
            const res = await ApiLib.post("/action/insertOne", {
              dataSource: "Cluster0",
              database: "lp3i-mobile",
              collection: "users",
              document: settings,
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
    <ScrollView>
      <View>
      <View style={{ width: windowWidth }}>
    <View style={[style.containtertiga, { borderWidth: 1, margin: 10, marginTop:-0.20,backgroundColor: "white", flexDirection: "row" ,height:150}]}>
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
          <View style={[style.containtertiga,{borderWidth:1,backgroundColor:"white",margin:1,marginLeft:5,marginRight:5,marginBottom:10,marginTop:20}]}>
            <Text style={style.textLabel}>Email Addres</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setEmail(value))}
              placeholder="Create your email"
              placeholderTextColor="#c7c7c7"
              value={settings.setEmail}
            />
            <Text style={style.textLabel}>Password</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setPassword(value))}
              placeholder="Create your password"
              placeholderTextColor="#c7c7c7"
              value={settings.setPassword}
            />
            <Text style={style.textLabel}>Confirm Password</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setPassword(value))}
              placeholder="Confirm Password"
              placeholderTextColor="#c7c7c7"
              value={settings.setPassword}
            />
             <TouchableOpacity style={{ backgroundColor: "#2F4EFF", padding: 10, width:100,borderRadius:10,width:200, marginLeft:70}}
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
  containtertiga: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  containeempat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  buttonStyle: {
    borderRadius: 50,
    marginTop: 100,
    marginBottom: 200,
  },
  btnContainer: {
    marginTop: 20,
  },
  signup:{
    borderRadius: 5,
  },

});
