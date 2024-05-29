import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView} from "react-native";
import { MyButton } from '../components';
import { ICGoogle } from '../../../assets';
import React, { useState } from "react";
const windowWidth = Dimensions.get('window').width;

export default function RegisterScreen({navigation}){
    const [nama, onChangeNama] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const onSubmitRegister=()=>{
        navigation.navigate('Login')
    }
    return(
        <ScrollView>
            <View>
                <View style={{width:windowWidth, height:500}}>
                <View style={style.statusbarStyle}>
                            <Image source={require('../../../assets/images/statusbar.jpg')}/>
                        </View>
                    <Text style={[style.textRegisterStyle,{fontSize:20,fontWeight:'bold', marginBottom:20,marginTop:20}]}>Create New Account</Text>
                    <View style={style.containtertiga}>
                    <Text style={style.textLabel}>Nama</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={onChangeNama}
                    placeholder='John Dae'
                    placeholderTextColor='#c7c7c7'
                    value={nama}/>
                    <Text style={style.textLabel}>Email Addres</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={onChangeEmail}
                    placeholder='Helloexample@gmail.com'
                    placeholderTextColor='#c7c7c7'
                    value={email}/>
                    <Text style={style.textLabel}>Password</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={onChangePassword}
                    placeholder='***********'
                    placeholderTextColor='#c7c7c7'
                    value={password}/>
                    </View>
                    <View style={style.containeempat}>
                        <Text>By Continuing,you agree to our</Text>
                        <Text style={[style.textTermStyle,{color:'blue',fontWeight:'bold'}]}>terms of service</Text>
                    </View>
                    <Button
                        onPress={() => navigation.navigate('Register')}
                         color='#0000FF'
                        title="Sign up"/>
                </View>
                <Text style={[style.textOrStyle,{textAlign:'center'}]}>──────── Or Via Social Media  ────────</Text>
                <View style={style.btnContainer}>
                     <MyButton 
                     text="Continue with google"
                     imgUrl={ICGoogle}/>
                </View>
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
})