import { View, Text, TextInput, StyleSheet, ScrollView, Alert, Dimensions, TouchableOpacity} from 'react-native';
import {MyButton, MyButton2} from '../../components/my_button'
import {ICGoogle} from '../../../assets'
import React from 'react'


const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}){
const[email, onChangeEmail] = React.useState('')
const[password, onChangePassword] = React.useState('')


const onSubmitLogin =()=>{
    try{
        if(email.trim().length === 0){
            throw Error('Harap masukkan email anda')
        }
        if(password.trim().length === 0){
            throw Error('Harap masukkan password anda')
        }

    navigation.navigate('home')
}catch (err){
    Alert.alert('Error', err.message,[
        {text: 'OK', onPress: () =>{
            console.log('ERR')
        }},
    ]);
}
}

const onChangePass=()=>{
    navigation.navigate("#")
}

return(
<ScrollView>
<View>
    <View style={{width: windowWidth, height:400}}>
    <Text style={style.textLoginStyle}>Login</Text>
        <View style={style.container}>
            <Text style={style.textLabel}>E-mail</Text>
            <TextInput 
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='Enter your email'
            placeholderTextColor='#b8b8ba'
            value={email}/>

            <Text style={[style.textLabel, {marginTop:20}]}>Password</Text>
            <TextInput 
            style={[style.textInputStyle, {marginBottom:12}]}
               onChangeText={onChangePassword} 
               placeholder='Enter your password'
               placeholderTextColor ='#b8b8ba'
               value ={password}/>
            <TouchableOpacity  onPress={onChangePass}>
            <Text style={[style.textLabel2]}>Forgot Password?</Text>
            </TouchableOpacity>

            <MyButton2 onPress={onSubmitLogin} text="Login"></MyButton2>
        </View>
    </View>
<View style={style.container2}>
    <Text style={style.textContinueStyle}>or login with</Text>
        <View>
    <MyButton text="Login with Google" imgUrl={ICGoogle}/>
        </View>
    </View>
</View>
    </ScrollView>
);
}

const style= StyleSheet.create({
    container: {
        padding:20,
        marginTop:20
    },
    container2: {
        padding:20,
        marginTop:380
    },
    textInputStyle:{
        height:50,
        marginTop:12,
        borderWidth:1.5,
        borderRadius:10,
        borderColor:'#b8b8ba',
        padding:10,
    },
    textLoginStyle:{
        fontSize:32,
        marginTop:100,
        fontWeight:'bold',
        textAlign:'center'
    },
    brandStyle:{
        marginTop:100,
        alignItems:'center',
        justifyContent:'center'
    },
    textLabel:{
        fontSize:12,
        fontWeight:'bold'
    },
    textLabel2:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:"right",
        color:"#4397f7",
        textDecorationLine:"underline",
        marginBottom:60
    },
    textContinueStyle:{
        textAlign: 'center',
        color:"#8f8e8d",
        marginBottom:20
    }
})