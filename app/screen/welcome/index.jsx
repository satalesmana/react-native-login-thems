import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
  } from 'react-native';           
  import React from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
  const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}){
    return(
       <ScrollView>
        <View>
        <View style={{ width: windowWidth, height:800}}>
        <ImageBackground source={require('../../../assets/images/gambar.png')}
        resizeMode="cover"
        style={{width:windowWidth,height:900}}>
        <View style={style.HaStyle}>
            <button style={{backgroundColor : "white", borderWidth : 0, borderRadius : 30}}>

        <Image 
         source={ require('../../../assets/images/logo H.png') } 
         onClick={() => {
            navigation.navigate("Login")
          }}/>
            </button>
        <Text style={[style.textHopeStyle,{fontSize:35.98,color:'#FFFFFF',fontFamily:'Poppins'}]}>Hope for Humanity</Text>
        </View>
        <Text style={[style.textWelcomeStyle,{textAlign:'center',marginTop:100,fontSize:29.18}]}>Welcome to hope for humanity</Text>
        </ImageBackground>
        </View>

        </View>
       </ScrollView>
    );
}

const style = StyleSheet.create({
    HaStyle:{
        marginTop:300,
        alignItems:'center',
        justifyContent:'center'
    },
        
    }
    

)