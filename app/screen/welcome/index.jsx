import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView} from "react-native";
import React from "react";

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}){
    const onSubmitWelcome=()=>{
        navigation.navigate('Login')
    }
    return(
        <ScrollView>
            <View>
                    <View style={style.welcomeStyle}>
                        <Image source={require('../../../assets/images/welcome.jpg')}/>
                        <Text style={[style.appStyle,{fontSize:30,fontWeight:'bold'}]}>Welcome to the app</Text>
                        <Text style={[style.appStyle,{fontSize:15,textAlign:'center'}]}>We're excited to help you book and manage your service appointments with ease</Text>
                        <Image source={require('../../../assets/images/lingkaran.jpg')}/>
                    </View>
                    <View style={style.buttonStyle}>
                    <Button
                        onPress={() => navigation.navigate('Login')}
                        color='#0000FF'
                        title="Login"/>
                        <Text style={[style.textCreateStyle,{textAlign:'center',color:'blue',fontSize:20,fontWeight:'bold'}]}>Create new account</Text>
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
    }
})