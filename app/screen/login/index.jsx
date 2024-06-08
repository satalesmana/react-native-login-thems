import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';  
import { LrsButton } from '../../components' 
import { ICLrs, ICFb, ICGgl, ICLi} from '../../../assets'       
import React from 'react'


const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}){
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


  const onRegister=()=>{
    navigation.navigate("RegisterName")
  }

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth}}>
              <View style={style.brandStyle}>
                <Image 
                  source={ICLrs} 
                />
              </View>
        </View>
        
        <Text style={style.textLoginStyle}>Welcome back!</Text>
        <Text style={style.textLogin2Style}>Login to your account</Text>
      
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

          <LrsButton
            onPress={onSubmitLogin}
            title="Login"/>
        </View>

        <Text style={style.textContinueStyle}>
          Forgot password?
        </Text>

        <View style={style.sosmed}>
          <Image source={ ICFb } />
          <Image source={ ICGgl } />
          <Image source={ ICLi } />
        </View>

        <View style={style.containerBottom}>
          <Text>Don't have account? </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={{fontWeight:'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:7
  },
  textInputStyle:{
    height: 50,
    marginLeft:45,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius : 6,
    width :320
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
    alignItems:'center',
    padding:10
  },
  sosmed:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%' ,
    marginBottom: 20,
    marginTop:10,
    marginLeft: 113,
    alignItems:'center'
  }
}
)