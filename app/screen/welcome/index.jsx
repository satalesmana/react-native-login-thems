import { View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView} from "react-native";
import React from 'react'
const windowWidth = Dimensions.get('window').width;
export default function WelcomeScreen({navigation}){
    const onSubmitWelcome=()=>{
        navigation.navigate('Login')

    }
    return(
        <ScrollView>
            <View style={{width:windowWidth,marginVertical:700,height:30}}>
            <ImageBackground 
            source={require('../../../assets/images/tanaman.png')}
            resizeMode="cover" 
             style={{width:windowWidth,height:600}}>
            </ImageBackground>

            <View style={style.brandStyle}>
                <Image 
                  source={ require('../../../assets/images/Branding.png') } 
                />
            <View style={style.container}>
            <Button
            onPress={() => navigation.navigate('Login')}
            color='#000000'
            title="Login"/>
            <Button
            onPress={() => navigation.navigate('Register')}
            color='#5f9ea0'
            title="Register"/>
            <Text style={[style.textContinueStyle,{textAlign:'center',marginTop:10 ,color:'#0000ff'}]}>Already have an account?Register Now</Text>
            </View>
            </View>
              </View>
        </ScrollView>
    );
}
const style=StyleSheet.create({
    brandStyle:{
        marginTop:-500,
        marginBottom:200,
        alignItems:'center',
        justifyContent:'center',
        height:700
    },
    textLoremStyle:{
        fontSize:15,
        marginTop:10,
        textAlign:'center'
    },
    container: { 
    padding:20
    }
})




