import { View,Text,TextInput,StyleSheet,TouchableOpacity,Button,ImageBackground,Dimensions,Image,Alert,ScrollView } from "react-native";
import { CustomeInput } from "../../components";
// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUsername,setEmail,setPassword, setFirstname, resetRegisterData } from "../../store/reducer/registerReducer";
import ApiLib from "../../lib/ApiLib";
import React, { useState } from "react";

const windowWidth = Dimensions.get('window').width;

export default function RegisterScreen({navigation}){
    // const [nama, onChangeNama] = React.useState('')
    // const [email, onChangeEmail] = React.useState('')
    // const [password, onChangePassword] = React.useState('')

    const [confirmPassword, setConfirmPassword] = useState("");
    const register = useSelector((state) => state.register.formInput);
        const dispatch = useDispatch();
        const onNextInput=()=>{
        try{
        if (!register.firstname) throw Error("Name is required");
        if (!register.email) throw Error("Email is required");
        if (!register.password) throw Error("Password is required");
        
        const message = `Name : ${register.firstname}\n
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
                  database: "uas",
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
        {/* <View style={style.statusbarStyle}>
                        <Image source={require('../../../assets/images/statusbar.png')}/>
                    </View> */}
                    <Text style={{fontWeight:'Semibold',fontSize:24,fontFamily:'Outfit',marginLeft:20,marginTop:20}}>Register</Text>
            <View style={{width:windowWidth,height:400}}>
                <ImageBackground source={require('../../../assets/images/lingkaransatu.png')}
                resizeMode="cover" 
                style={{width:windowWidth,height:406,width:445,marginBottom:-37,marginVertical:-210}}>
                    <ImageBackground source={require('../../../assets/images/lingkarandua.png')}
                    style={{width:windowWidth,height:342,width:342,marginBottom:50,marginLeft:100}}>
                    </ImageBackground>

                    <View style={style.MiniStyle}>
                        <Image source={require('../../../assets/images/Mini Shop.png')}/>
                    </View>
                </ImageBackground>
            </View>
            <View style={style.container}>
            <CustomeInput
            onChangeText={(value=>dispatch(setFirstname(value)))}placeholder='username' placeholderTextColor='#c7c7c7'/>
            <CustomeInput
            onChangeText={(value=>dispatch(setEmail(value)))}placeholder='Email' placeholderTextColor='#c7c7c7'/>
            <CustomeInput
            onChangeText={(value=>dispatch(setPassword(value)))}placeholder='Password' placeholderTextColor='#c7c7c7'/>

            </View>
            <View style={{width : "80%", alignContent : "center",  alignSelf : "center", color:"black"}}>
            <TouchableOpacity style={{backgroundColor :"#FFC600",padding:10}}
            onPress={onNextInput} >
            <Text style={{color : "black", alignSelf : "center"}}>Login</Text>
            </TouchableOpacity>  
            </View>
            <View style={style.containerdua}>
                <Text>Alredy have an account?</Text>
                <Text style={{fontWeight:'bold',color:'#0C1F22'}}  onPress={() => navigation.navigate('Login')}>Login</Text>
            </View>
        </View>
    </ScrollView>
    );
}

const style=StyleSheet.create({
    container: { 
        padding:20,
        marginTop:-200
      },
    MiniStyle:{
       marginTop:-20,
       marginBottom:500,
       alignItems:'center',
       justifyContent:'center'
    },
    textInputStyle:{
        height:40,
        marginTop:10,
        borderWidth:1,
        padding:10,
        marginBottom:10
    },
    textExploreStyle:{
        fontSize:32,
        marginTop:400,
        fontWeight:'bold',
        textAlign:'center'
    },
    textLoremStyle:{
        fontSize:15,
       textAlign:'center',
       marginTop:50,
       marginBottom:50
    },
    containerdua:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30

    }
})