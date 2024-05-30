import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView } from "react-native";
import React from 'react'

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen(){
    const [username, onChangeUsername] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const onSubmitHome=()=>{

    }
    return(
        <ScrollView>
        <View style={{width:windowWidth, }}>
                <ImageBackground source={require('../../../assets/images/pinggir.png')}
                    resizeMode="cover" 
                     style={{width:windowWidth, height:400}}>
                      <View style={style.brandStyleLogo}>
                <Image 
                  source={ require('../../../assets/images/logo.png') } 
                />
              </View>
                      <Text style={style.textLoginStyle}>Create an account</Text>
                      </ImageBackground>
                      <View style={style.onlineStyle}>
            </View>
            <View style={style.container}>
            <TextInput style={style.textInputStyle}onChangeText={onChangeUsername}placeholder='username' placeholderTextColor='#FFC600'value={username}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangeEmail}placeholder='Enter Email id'placeholderTextColor='#FFC600' value={email}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Enter Your Password'placeholderTextColor='#FFC600'value={password}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Enter Your Password'placeholderTextColor='#FFC600'value={password}/>
            <Button
            onPress={() => navigation.navigate('Home')}
            color='#FFC600'
            title="SIGN UP"/>
            </View>
            <View style={style.containerdua}>
                <Text>Already have an account?</Text>
                <Text style={{fontWeight:'bold'}}>Login Upp</Text>
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
        marginBottom:10,
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

    },
    onlineStyle:{
        alignItems:'center',
        justifyContent:'center',
        padding:80
    },
    textLoginStyle:{
      fontSize:25,
      marginTop:180,
      fontWeight:'bold',
      marginLeft:70
      
    },
    brandStyleLogo:{
      marginLeft:30,
      marginVertical:20
    }
})