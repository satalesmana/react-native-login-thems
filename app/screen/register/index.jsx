import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView,Alert} from "react-native";
import { MyButton } from '../components';
import { ICGoogle } from '../../../assets';
import { useSelector, useDispatch } from "react-redux";
import {
    setFirstName,
    setEmail,
    setPassword,
    resetRegisterData,
  } from "../../store/reducer/registerReducer";
  import ApiLib from "../../lib/Apilib";
import React, { useState } from "react";
const windowWidth = Dimensions.get('window').width;


export default function RegisterScreen({navigation}){
    // const [nama, onChangeNama] = React.useState('')
    // const [email, onChangeEmail] = React.useState('')
    // const [password, onChangePassword] = React.useState('')

    const [confirmPassword, setConfirmPassword] = useState("");
    const register = useSelector((state) => state.register.formInput);
    const dispatch = useDispatch();
    const onNextInput = () => {
      try {
        if (!register.firstName) throw Error("Name is required");
        if (!register.email) throw Error("Email is required");
        if (!register.password) throw Error("Password is required");
        
        const message = `Name : ${register.firstName}\n
        Email : ${register.email}\n
        Password : ${register.password}\n`;
  
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
                dispatch(resetRegisterData());
                navigation.navigate("Login");
              }
            },
          },
        ]);
      } catch (err) {
        Alert.alert("Error", err.message, [{ text: "OK" }]);
      }
    };
  
    return(
        <ScrollView>
            <View>
            
                    <Text style={[style.textRegisterStyle,{fontSize:20,fontWeight:'bold', marginBottom:20,marginTop:20}]}>Create New Account</Text>
                    <View style={style.containtertiga}>
                    <Text style={style.textLabel}>Nama</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={(value)=>dispatch(setFirstName(value))}value={register.setFirstName}/>
                    <Text style={style.textLabel}>Email Addres</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={(value)=>dispatch(setEmail(value))}value={register.setEmail}/>
                    <Text style={style.textLabel}>Password</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={(value)=>dispatch(setPassword(value))}value={register.setPassword}/>
                    </View>
                    <View style={style.containeempat}>
                        <Text>By Continuing,you agree to our</Text>
                        <Text style={[style.textTermStyle,{color:'blue',fontWeight:'bold'}]}>terms of service</Text>
                    </View>
                    <Button
                        onPress={onNextInput}
                         color='#0000FF'
                        title="Sign up"/>
                </View> 
                <Text style={{textAlign:'center',marginTop:20}}>──────── Or Sign in with  ────────</Text>
                <View style={style.btnContainer}>
                     <MyButton 
                     text="Continue with google"
                     imgUrl={ICGoogle}/>
                </View>
                <View style={style.containeempat}>
                        <Text>All ready have an account?</Text>
                        <Text style={[style.textTermStyle,{color:'blue',fontWeight:'bold'}]}>sign in</Text>
                    </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    containtertiga:{
        padding:20
    },
    textInputStyle:{
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
    },
    containeempat:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30
    },
    buttonStyle:{
        borderRadius:50,
        marginTop:100,
        marginBottom:200
        
    },
    btnContainer:{
        marginTop:50,
    }
})