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
        <View>
        <View style={style.statusbarStyle}>
                        <Image source={require('../../../assets/images/statusbar.png')}/>
                    </View>
                    <Text style={{fontWeight:'Semibold',fontSize:24,fontFamily:'Outfit',marginLeft:20,marginTop:20}}>Register</Text>
            <View style={{width:windowWidth,height:500}}>
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
            <TextInput style={style.textInputStyle}onChangeText={onChangeUsername}placeholder='username' placeholderTextColor='#c7c7c7'value={username}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangeEmail}placeholder='Enter Email id'placeholderTextColor='#c7c7c7' value={email}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Enter Your Password'placeholderTextColor='#c7c7c7'value={password}/>
            <Button
            onPress={() => navigation.navigate('Home')}
            color='#FFC600'
            title="Register"/>
            </View>
            <View style={style.containerdua}>
                <Text>Alredy have an account?</Text>
                <Text style={{fontWeight:'bold'}}>Login</Text>
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