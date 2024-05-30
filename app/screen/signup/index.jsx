import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  ScrollView,
  Alert
} from 'react-native';  
import { MyButton } from '../../components' 
import { ICMonstr, ICGitlab, } from '../../../assets';    
import React from 'react'

const windowWidth = Dimensions.get('window').width;

export default function SignupScreen({navigation}){
  const [email, onChangeEmail] = React.useState('')
  const [number, onChangeNumber] = React.useState("");
  const [pasword, onChangePassword] = React.useState('')

  const goLogin = () => {
    navigation.navigate("Login");
  };

  const onSubmitLogin =()=>{
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
  
  return (
    <ScrollView>
      <View>
        <View style={{height: 400}}>
              <View style={style.UIXStyle}>
                <Image 
                  source={ require('../../../assets/images/uix.png') }/>
              </View>
              <Text style={{fontSize:29,padding:10, fontWeight:'bold', marginTop:10}}>Create an account</Text>
              <Text style={{fontSize:17,padding:10, fontWeight:'bold', color:'#999EA1', marginTop: '-7%'}}>Connect with your friends today!</Text>
        </View>
      
        <View style={style.container}>
          <View style={{marginTop: '-20%'}}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='enter your email'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel, { marginTop: 15 }]}>Phone Number</Text>
          <TextInput
            style={[style.textInputStyle,]}
            onChangeText={onChangeNumber}
            placeholder="Enter Your PhoneNumber"
            placeholderTextColor="#c7c7c7"
            value={number}/>

          <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePassword}
            placeholder='Please your enter password'
            placeholderTextColor='#c7c7c7'
            value={pasword}/>
        </View>
        </View>
          <Text style={[style.textForgetStyle,{fontSize:15, fontWeight:'bold', textAlign:'center'
          , marginRight:-200, marginBottom:20, color:'#FB344F'}]}>Forgot password</Text>

          <Button
            onPress={onSubmitLogin}
            color='#351A96'
            title="Login"/>

        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              width: "90%",
              alignSelf: "center",
            }}>
            
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginLeft: 20,
                  marginRight: 20,
                  fontWeight: 734,
                  fontSize: 15,
                }}
              >
                Or With
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>


        <View style={style.btnContainer}>
          <MyButton
            text="gitlab"
            imgUrl={ICGitlab}/>

          <MyButton
            style={{marginLeft:15}}
            text="monstr"
            imgUrl={ICMonstr}/>
        </View>

        <View style={style.containerBottom}>
          <Text>Already have an account? </Text>
          <Text onPress={goLogin} style={style.textSign}>Login</Text>
        </View>
        </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:20
  },
  UIXStyle:{
    alignItems:'center'
  },
  textInputStyle:{
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle:{
    fontSize:32,
    marginTop:150,
    fontWeight:'bold',
    textAlign:'center'
    
  },
  brandStyle:{
    marginTop:100,
    alignItems:'center',
    justifyContent:'center'
  },
  textLabel:{
    fontSize:12,
    fontWeight:'bold',
  },
  btnContainer:{
    flex:1,
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20
  },
  textContinueStyle:{
    textAlign:'center',
    padding:10
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30,
    color:'#160062'
  }
})