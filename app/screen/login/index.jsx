import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView} from 'react-native';
import { MyButton } from '../components';
import { ICGoogle } from '../../../assets';
import React, { useState } from "react";
import { CheckBox } from "react-native-web";


const windowWidth = Dimensions.get('window').width;
export default function LoginScreen({navigation}){
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [isSelected,setSelection]=useState(false);
    
    const onSubmitLogin=()=>{
        try{
            if(email.trim().length === 0 ){
              throw Error('Email is required')
            }
      
            if(password.trim().length === 0 ){
              throw Error('Password is required')
            }
      
            navigation.navigate('Register')
          }catch(err){
            Alert.alert('Error', err.message, [
              {text: 'OK', onPress: () => {
                console.log('ERR')
              }},
            ]);
          }
      
        }

    return(
        <ScrollView>
            <View>
            <View style={{width:windowWidth, height:500}}>
                <View style={style.statusbarStyle}>
                 <Image source={require('../../../assets/images/statusbar.jpg')}/>
                </View>
                    <Text style={[style.textLoginStyle,{fontSize:20,fontWeight:'bold',marginTop:20}]}>Login</Text>
                    <Text style={[style.textWelcomeStyle,{fontSize:15,marginBottom:20}]}>Welcome to the back to the app</Text>
                    <View style={style.containter}>
                    <Text style={style.textLabel}>Email Addres</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={onChangeEmail}
                    placeholder='Helloexample@gmail.com'
                    placeholderTextColor='#c7c7c7'
                    value={email}/>
                    <Text style={[style.textForgetStyle,{textAlign:'right',color:'blue'}]}>Forget password ?</Text>
                    <Text style={style.textLabel}>Password</Text>
                    <TextInput style={[style.textInputStyle, {marginBottom:12}]}onChangeText={onChangePassword}
                    placeholder='***********'
                    placeholderTextColor='#c7c7c7'
                    value={password}/>
                    </View>
                    <View style={style.containerdua}>
                        <View style={style.checkboxContainerdua}>
                        <CheckBox value={isSelected}onValueChange={setSelection}style={style.checkbox}/>
                        <Text style={style.label}>Keep me Signed in</Text>
                        </View>
                        </View>
                    <View style={style.buttonStyle}>
                    <Button
                        onPress={() => navigation.navigate('Register')}
                         color='#0000FF'
                        title="Login"/>
                         <Text style={[style.textOrStyle,{textAlign:'center'}]}>──────── Or Via Social Media  ────────</Text>
                        <Text style={[style.textCreateStyle,{textAlign:'center',color:'blue',fontSize:20,fontWeight:'bold'}]}>Create new account</Text>
                    </View>
                    <View style={style.btnContainer}>
                     <MyButton 
                     text="Continue with google"
                     imgUrl={ICGoogle}/>
                </View>
                </View>
            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    welcomeStyle:{
        marginTop:200,
        alignItems:'center',
        justifyContent:'center' 
    },
    buttonStyle:{
        borderRadius:50
    },
    containter:{
        padding:20
    },
    textInputStyle:{
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
    },
    containerdua:{
        flex:1,
    },
    checkboxContainerdua:{
        flexDirection:'row',
        marginBottom:20,
        textAlign:'right',
        marginLeft:30
    },
    
})