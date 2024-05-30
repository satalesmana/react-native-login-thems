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
      <ScrollView>
        <View>
          <View style={{ width: windowWidth}}>
                <View style={style.brandStyle}>
                  <Image 
                    source={ require('../../../assets/images/logres.png') } 
                  />
                </View>
                
              <Text style={style.textLoginStyle}>Welcome</Text>
              <Text style={style.textLogin2Style}>Create your account</Text>
          </View>
        
          <View style={style.container}>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder='Email'
              placeholderTextColor='black'
              value={email}/>
  
            <TextInput
              style={[style.textInputStyle, {marginBottom:12}]}
              onChangeText={onChangePassword}
              placeholder='Password'
              placeholderTextColor='black'
              value={pasword}/>

            <TextInput
              style={[style.textInputStyle, {marginBottom:12}]}
              onChangeText={onChangePassword}
              placeholder='Confirm Password'
              placeholderTextColor='black'
              value={pasword}/>
  
            <FbButton
              onPress={onSubmitLogin}
              title="Sign up"/>
  
              
          </View>
            <View style={style.orr}>
                <Image source={ require('../../../assets/images/Line.png') } />
                <Text style={style.textContinueStyle}>or</Text>
                <Image source={ require('../../../assets/images/Line.png') } />
            </View>
  
          <View style={style.sosmed}>
            <Image source={ require('../../../assets/images/Fb.png') } />
            <Image source={ require('../../../assets/images/Google.png') } />
            <Image source={ require('../../../assets/images/LinkedIn.png') } />
          </View>
  
          {/* <View style={style.btnContainer}>
            <MyButton
              text="Google"
              imgUrl={ICGoogle}/>
  
            <MyButton
              style={{marginLeft:15}}
              text="Facebook"
              imgUrl={ICFacebook}/>
          </View> */}
  
          <View style={style.containerBottom}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={onLogin}>
              <Text style={{fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: { 
      padding:5
    },
    textInputStyle:{
      height: 50,
      marginLeft:45,
      marginTop: 30,
      borderWidth: 1,
      padding: 10,
      borderRadius : 6,
      width :290
    },
    textLoginStyle:{
      fontSize:24,
      marginTop:50,
      marginLeft: 50,
      fontWeight:'700',
      opacity : 0.8
      
    },
    textLogin2Style:{
      fontSize:13,
      marginLeft: 51,
      fontWeight:'500',
      opacity : 0.3
      
    },
    brandStyle:{
      marginTop:50,
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
      padding:30,
      opacity: 0.6,
      fontSize:13
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:10
    },
    sosmed:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '45%' ,
      marginBottom: 20,
      marginTop:10,
      marginLeft: 120,
      alignItems:'center'
    },
    orr:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft: 45,
        width: '45%'
    }
  }
  )