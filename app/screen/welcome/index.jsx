import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Dimensions,Image,ScrollView} from "react-native";
import React from 'react'
const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}){
    const onSubmitWelcome=()=>{
        navigation.navigate('Login')
    }
    return(
        <ScrollView>
            <View>
            <View style={{width:windowWidth}}>
                <ImageBackground source={require('../../../assets/images/pinggir.png')}
                    resizeMode="cover" 
                     style={{width:windowWidth, height:400}}>
                {/* <View style={{width:windowWidth,height:720}}>
                    <ImageBackground source={require('../../../assets/images/Rectangle 2.png')}
                    resizeMode="cover" 
                    style={{width:windowWidth,height:450,width:445,marginBottom:-37,marginVertical:-210}}>
                    <ImageBackground source={require('../../../assets/images/Rectangle 8.png')}
                    style={{width:windowWidth,height:342,width:342,marginBottom:50,marginLeft:100}}>
                </ImageBackground> */}

                        <View style={style.onlineStyle}>
                            <Image source={require('../../../assets/images/Frame7.png')}/>
                        </View>
                    </ImageBackground>
                    <Text style={style.textExploreStyle}>Welcome To our App</Text>
                    <Button
            onPress={() => navigation.navigate('Login')}
            color='#FFC600'
            title="Start our Journey"/>
                
                </View>
            </View>
        </ScrollView>
    );
}

const style=StyleSheet.create({
    onlineStyle:{
        alignItems:'center',
        justifyContent:'center',
        padding:80
    },
    textExploreStyle:{
        fontSize:28,
        marginVertical:50,
        fontWeight:'bold',
        textAlign:'center'
    },
    textLoremStyle:{
        fontSize:15,
        marginTop:10,
        textAlign:'center'
    }
})