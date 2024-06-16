import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert,InputText,
  Image
} from 'react-native';
import {AI} from '../../../assets'


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { clerAuth } from '../../store/reducer/authReducer';
import { setEmail, setPassword} from '../../store/reducer/settingReducer';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for eye icon
import ApiLib from "../../lib/ApiLib"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingScreen({navigation}) {
  const auth = useSelector((state) => state.auth)

  const [confirmPassword, onChangePassword] = useState('');
  const setting = useSelector((state) => state.setting.formInput);
  const [hidePassword, setHidePassword] = useState(true); // Password visibility state
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true); // Confirm password visibility state
  const [isEmailFocused, setIsEmailFocused] = useState(false); // Nim focus state
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Password focus state
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false); // Confirm password focus state
    const dispatch = useDispatch()

    const onLogout=()=>{
      dispatch(clerAuth())
      navigation.replace("Login")
  } 
  
    try {
   
      if (setting.email === null || setting.email === "") {
        throw new Error('email is required');
      }

      if (setting.password === null || setting.password === "") {
        throw new Error('Password is required');
      }
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
          const res = await ApiLib.updateUser("/action/updateOne", {
            dataSource: "Cluster0",
                database: "UAS",
                collection: "users",
                document: setting
          });
          if (res.data?.updateUser) {
            dispatch(resetSettingData());
            navigation.navigate("Login");
          }
        },
      },
    ]);
  } catch (err) {
    Alert.alert("Error", err.message, [{ text: "OK" }]);
  }


  

    return (
     
        <View
          style={{windowWidth:windowWidth,windowHeight:windowHeight,backgroundColor:'#F0EBE3' }}>

          <View style={{windowWidth:windowWidth,height:70,backgroundColor:'#FEFAF6'}}>
          <Text style={{fontSize:24,fontWeight:'900',marginTop:30,left:15}}>Account Settings</Text>
          </View>
         
          <View style={{marginTop:7,backgroundColor:'#F6F5F2',windowWidth:windowWidth,height:140,flexDirection:'row',alignItems:'center'}}>
<Image  source={AI} style={{marginLeft:10}} />

<View style={{marginLeft:15}}>
<Text style={{ color: "black",
                fontSize: 25,
                fontWeight:'900',
                fontFamily: "Roboto",}}>{auth.nama}  </Text>
<Text style={{ color: "black",
                fontSize: 15,
                opacity:0.5,
                fontFamily: "Roboto"}}>{auth.email}</Text>
                
                <TouchableOpacity onPress={() => onLogout()} style={{marginTop:15,width:220,alignItems:'center',backgroundColor:'#E4E7EB',height:30,justifyContent:'center'}}>
<Text style={{alignItems:'center'}}>Log Out</Text>
                </TouchableOpacity>
</View>
          </View>

<View style={{marginTop:7,backgroundColor:'#F6F5F2'}}>
<Text>Change Password</Text>
<Text>Email</Text>
<View style={style.inputView}>
<TextInput
           style={[style.textInputStyle,{marginTop:-15,paddingTop:40, borderBottomColor: isEmailFocused ? 'blue' : 'black' }
            ]}
            value={setting.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Email"
            placeholderTextColor="black"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          </View>
          <Text>Password</Text>
          
          <View style={style.inputView}>
            <TextInput
              style={[
                style.textInputStyle,
                {marginTop:-15,paddingTop:40, flex: 1, borderBottomColor: isPasswordFocused ? 'blue' : 'black' }
              ]}
              value={setting.password}
              onChangeText={(value) => dispatch(setPassword(value))}
              placeholder="Create Password"
              secureTextEntry={hidePassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={18} color="black" style={{right:15}}/>
            </TouchableOpacity>
          </View>

          <View style={style.inputView}>
            <TextInput
              style={[
                style.textInputStyle,
                {marginTop:-15,paddingTop:40, flex: 1, borderBottomColor: isConfirmPasswordFocused ? 'blue' : 'black' }
              ]}
              value={confirmPassword}
              onChangeText={onChangePassword}
              placeholder="Confirm Password"
              secureTextEntry={hideConfirmPassword}
              onFocus={() => setIsConfirmPasswordFocused(true)}
              onBlur={() => setIsConfirmPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
              <Ionicons name={hideConfirmPassword ? 'eye-off' : 'eye'} size={18} color="black" style={{right:15}}/>
            </TouchableOpacity>
          </View>

<TouchableOpacity onPress={onLogout}>
  <Text>Submit</Text>
</TouchableOpacity>
</View>

          </View>
        
      );
}
const style = StyleSheet.create({
  inputView: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
})