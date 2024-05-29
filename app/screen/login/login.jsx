import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Dimensions, Image, ScrollView, Alert} from 'react-native';
import React from 'react'
import {MyButton} from '../../components'
import {ICGoogle} from '../../../assets'


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

    navigation.navigate('Home')
}catch (err){
    Alert.alert('Error', err.message,[
        {text: 'OK', onPress: () =>{
            console.log('ERR')
        }},
    ]);
}
}

return(
<ScrollView>
    <View>
    <View style={{width: windowWidth, height:400}}>
    <Text style={style.textLoginStyle}>Login</Text>
    </View>
        <View style={style.container}>
            <Text style={style.textLabel}>E-mail</Text>
            <TextInput 
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='Enter your email'
            placeholderTextColor='#c7c7c7'
            value={email}/>

            <Text style={[style.textLabel, {marginTop:20}]}>Password</Text>
            <TextInput 
            style={[style.textInputStyle, {marginBottom:12}]}
               onChangeText={onChangePassword} 
               placeholder='Enter your password'
               placeholderTextColor ='#c7c7c7'
               value ={password}/>

    <Button onPress={onSubmitLogin}
    color='#000113'
    title="Login"></Button>
    </View>
    <Text style={style.textContinueStyle}>Or Continue With</Text>
    <View style={style.btnContainer}>
    <MyButton
    text="Google" imgUrl={ICGoogle}/>
    </View>
    <View style={style.containerBottom}>
        <Text style={{color:'#AEB6BF'}}>Don't have account? </Text>
        <Text style={{fontWeight:'bold'}}>Create Now</Text>
    </View>
    </View>
    </ScrollView>
);
}

const style= StyleSheet.create({
    container: {
        padding:20
    },
    textInputStyle:{
        height:40,
        marginTop:12,
        borderWidth:1,
        padding:10,
    },
    textLoginStyle:{
        fontSize:32,
        marginTop:150,
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
    btnContainer:{
        flex:2,
        flexDirection:'row',
        padding:20,
    },
    textContinueStyle:{
        textAlign: 'center'
    },
    containerBottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        margin:50
    }

})