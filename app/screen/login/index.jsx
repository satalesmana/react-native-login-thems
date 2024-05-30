import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView,
    Alert
  } from 'react-native';  
  import { MyButton } from '../../components'    
 import { ICGoogle, ICFacebook, ICVictor } from '../../../assets'; 
  import React from 'react'
const windowWidth =Dimensions.get('window').width;

export default function LoginScreen({navigation}){
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    
    const onSubmitLogin=()=>{
        try{
            if(email.trim().length === 0 ){
              throw Error('Email is required')
            }
      
            if(pasword.trim().length === 0 ){
              throw Error('Password is required')
            }
      
            navigation.navigate('Home')
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
        <View style={{width:windowWidth}}>
                <ImageBackground source={require('../../../assets/images/pinggir.png')}
                    resizeMode="cover" 
                     style={{width:windowWidth, height:400}}>
                      <View style={style.brandStyleLogo}>
                <Image 
                  source={ require('../../../assets/images/logo.png') } 
                />
              </View>
                      <Text style={style.textLoginStyle}>Login</Text>
                      </ImageBackground>
                      <View style={style.onlineStyle}>
                {/* <ImageBackground source={require('../../../assets/images/Rectangle 8.png')}
                resizeMode="cover" 
                style={{width:windowWidth,height:406,width:445,marginBottom:-37,marginVertical:-210}}>
                <ImageBackground source={require('../../../assets/images/lingkarandua.png')}
                style={{width:windowWidth,height:342,width:342,marginBottom:50,marginLeft:100}}>
                </ImageBackground>
                
                
              </ImageBackground> */}
              </View>
            <View style={style.container}>
            <TextInput style={style.textInputStyle}onChangeText={onChangeEmail}placeholder='Enter Email id'placeholderTextColor='#FFC600' value={email}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Enter Your Password'placeholderTextColor='#FFC600'value={password}/>
            <Text style={[style.textForgetStyle,{fontSize:15,fontWeight:'bold',textAlign:'center',marginRight:-200,marginBottom:20}]}>Forget Password?</Text>
            <Button
            onPress={() => navigation.navigate('Home')}
            color='#FFC600'
            title="Login"/>
            <View style={style.containerWith}>
                <Text style={[style.textContinueStyle,{textAlign:'center',marginTop:10}]}>──────── Or Continue With  ────────</Text>
            </View>
            </View>
            
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
       marginBottom:0,
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
    btnContainer:{
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
    fontSize:32,
    marginTop:250,
    fontWeight:'bold',
    marginLeft:50
    
  },
  brandStyleLogo:{
    marginLeft:30,
    marginVertical:20
  }
    
    
})