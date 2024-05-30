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
  
  export default function WelcomeScreen({navigation}){
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
    const onRegister=()=>{
        navigation.navigate("RegisterName")
      }
  
    return (
      <ScrollView style={{ backgroundColor:'#102c57'}}>
        <View>
          <View style={{ width: windowWidth, height: 400, backgroundColor:'#102c57'}}>
                <View style={style.brandStyle}>
                  <Image 
                    source={ require('../../../assets/images/logo.png') } 
                  />
                </View>
          </View>
          <View>
            <Text style={style.textLoginStyle}>Hello, Welcome!</Text>
            <Text style={style.textLogin2Style}>welcome to codeChamp.in Top platform</Text>
            <Text style={style.textLogin3Style}>to coders</Text>
          </View>
        
          <View style={style.container}>
  
            <FbButton
              onPress={onLogin}
              title="Login"/>

            <FbButton
              onPress={onRegister}
              title="Sign Up"/>
  
              
          </View>
  
          <Text style={style.textContinueStyle}>
            Or via social media
          </Text>
  
          <View style={style.sosmed}>
            <Image source={ require('../../../assets/images/fb.png') } />
            <Image source={ require('../../../assets/images/google.png') } />
            <Image source={ require('../../../assets/images/In.png') } />
            </View>
  
          {/* <View style={style.containerBottom}>
            <Text>Don't have account? </Text>
            <TouchableOpacity onPress={onRegister}>
              <Text style={{fontWeight:'bold'}}>Create now</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    brandStyle: {
        marginTop: 250,
        marginBottom: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    container: { 
      padding:20
    },
    textInputStyle:{
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
    },
    textLoginStyle:{
      fontSize:36,
      marginTop:10,
      fontWeight:'bold',
      textAlign:'center',
      color: 'white'
      
    },
    textLogin2Style:{
        fontSize:16,
        marginTop:20,
        fontWeight:'bold',
        textAlign:'center',
        color: 'white'
        
      },
      textLogin3Style:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        color: 'white'
        
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
      flex:1,
      flexDirection:'row',
      paddingLeft:20,
      paddingRight:20
    },
    textContinueStyle:{
      textAlign:'center',
      padding:10,
      color: 'white'
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:30
    },
    sosmed:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%' ,
        marginBottom: 20,
        marginTop:10,
        marginLeft: 163,
        alignItems:'center'
      }
  })