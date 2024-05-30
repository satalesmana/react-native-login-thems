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
    Alert,
    TouchableOpacity
  } from 'react-native';  
  import { MyButton, FbButton } from '../../components' 
  import { ICFacebook, ICGoogle } from '../../../assets'       
  import React from 'react'
  
  
  const windowWidth = Dimensions.get('window').width;
  
  export default function RegisterInputNameScreen({navigation}){
    const [email, onChangeEmail] = React.useState('')
    const [pasword, onChangePassword] = React.useState('')
  
    const onSubmitLogin =()=>{
      try{
        if(email.trim().length === 0 ){
          throw Error('Email is required')
        }
  
        if(pasword.trim().length === 0 ){
          throw Error('Password is required')
        }
  
        navigation.replace("Home")
      }catch(err){
        Alert.alert('Error', err.message, [
          {text: 'OK', onPress: () => {
            console.log('ERR')
          }},
        ]);
      }
    }
  
  
    const onLogin=()=>{
      navigation.navigate("Login")
    }
  
    return (
      <ScrollView style={{backgroundColor:'#102c57'}}>
        <View >
          <Text style={style.textLoginStyle}>Welcome back!</Text>
          <Text style={style.textLogin2Style}>Login to continue</Text>
          {/* <View style={{ width: windowWidth, height: 400}}>
            <ImageBackground 
              source={ require('../../../assets/images/Subtract.png') } 
              resizeMode="cover"
              style={{width:windowWidth, height:400}}>
                <View style={style.brandStyle}>
                  <Image 
                    source={ require('../../../assets/images/Brand.png') } 
                  />
                </View>
                
              <Text style={style.textLoginStyle}>Login</Text>
            </ImageBackground>
          </View> */}
        
          <View style={style.container}>
            <Text style={style.textLabel}>Username</Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholderTextColor='#c7c7c7'
              value={email}/>
  
            <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
            <TextInput
              style={[style.textInputStyle, {marginBottom:12}]}
              onChangeText={onChangePassword}
              placeholderTextColor='#c7c7c7'
              value={pasword}/>
  
            <Text style={style.textContinueStyle}>
            Forgot password?
            </Text>
  
            <FbButton
              onPress={onSubmitLogin}
              title="Sign Up"/>
  
              
          </View>
  
        
          <View style={style.containerBottom}>
            <Text style={{color:'white'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={onLogin}>
              <Text style={{fontWeight:'bold', textDecorationLine: 'underline', color:'#dac0a3'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: { 
      padding:20
    },
    textInputStyle:{
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 25,
      borderRadius: 25,
      backgroundColor: 'white',
      width:380
    },
    textLoginStyle:{
      fontSize:26,
      marginTop:200,
      marginLeft: 45,
      fontWeight:'700',
      opacity : 0.8,
      color: 'white'
      
    },
    textLogin2Style:{
      fontSize:12,
      marginLeft: 46,
      fontWeight:'500',
      opacity : 0.3,
      color: 'white'
      
    },
    brandStyle:{
      marginTop:100,
      alignItems:'center',
      justifyContent:'center'
    },
    textLabel:{
      fontSize:16,
      fontWeight:'bold',
      color:'white'
    },
    btnContainer:{
      flex:1,
      flexDirection:'row',
      paddingLeft:20,
      paddingRight:20
    },
    textContinueStyle:{
      textAlign:'right',
      padding:10,
      color:'white'
  
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:30,
    }
  })