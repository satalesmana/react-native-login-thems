import { View,Text,TextInput,StyleSheet,Button,Switch,ImageBackground,Dimensions,Image,ScrollView} from 'react-native';
import { MyButton } from '../components';
import { ICGoogle } from '../../../assets';
import React, { useState } from "react";


const windowWidth = Dimensions.get('window').width;
export default function LoginScreen({navigation}){
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <Text style={[style.textLoginStyle,{fontSize:20,fontWeight:'bold',marginTop:20}]}>Login</Text>
                    <Text>Welcome to the back to the app</Text>
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
                    <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}/>
                    <Text style={style.label}>Keep me Signed in</Text>
                    </View>
                    <View style={style.buttonStyle}>
                    <Button
                        onPress={() => navigation.navigate('Register')}
                         color='#0000FF'
                        title="Login"/>
                         <Text style={[style.textOrStyle,{textAlign:'center'}]}>──────── Or Sign in with  ────────</Text>
                    </View>
                    <View style={style.btnContainer}>
                     <MyButton 
                     text="Continue with google"
                     imgUrl={ICGoogle}/>
                </View>
                <Text style={[style.textCreateStyle,{textAlign:'center',color:'blue',fontSize:20,fontWeight:'bold'}]}>Create new account</Text>
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
        alignItems:"baseline",
        justifyContent:"center"
    },
    
})