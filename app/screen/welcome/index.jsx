import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView, TouchableOpacity} from "react-native";
import React from "react";

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}){
    const onSubmitWelcome=()=>{
        navigation.navigate('Login')
    }
    return(
        <ScrollView >
            <View style={style.container}>
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
                        title="Login"
                        titleStyle={{ borderRadius:10 }}/>
                        
                    </View>
                    
                    <View>
                    <Text style={style.textCreateStyle} onPress={()=>navigation.navigate('Register')}>Create new account</Text>
                    </View>
                    
                </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    welcomeStyle:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center' 
        
    },
    buttonStyle:{
        borderRadius:10
    },
    container:{
        padding:15,
        backgroundColor: 'white',
    },
    textCreateStyle:{
        textAlign:'center',
        color:'blue',
        fontSize:15,
        fontWeight:'bold',
        marginTop: 20,
    },
})