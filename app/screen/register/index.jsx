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
import {useState} from 'react'  
import { LrsButton } from '../../components' 
import { 
    ICLrs,
    ICFb, 
    ICGgl, 
    ICLi, 
    ICLine } from '../../../assets'
import { useSelector, useDispatch } from 'react-redux'
import { setPassword, resetRegisterData } from '../../store/reducer/registerReducer'
import { setEmail } from '../../store/reducer/registerReducer'
import React from 'react'
  
const windowWidth = Dimensions.get('window').width;
  
export default function Register({navigation}){
  const [confirmPassword, setConfirmPassword] = useState(null)
  const register = useSelector((state) => state.register.formSignUp)
  const dispatch = useDispatch()
  
  const onTest =()=>{
      try{
          if( register.email === null || register.email === ""){
              throw Error('email is required')
          }
          if( register.password === null || register.password === ""){
              throw Error('password is required')
          }

          if( confirmPassword === null ||  confirmPassword === ""){
              throw Error('Confirm password is required')
          }

          if( confirmPassword !== register.password){
              throw Error(`Confirm password doesn't match`)
          }
          
          let message = `Email : ${register.email} \n`

          Alert.alert('Confirm', message, [
              {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
              }
          ]);
          
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
                    source={ ICLrs } 
                  />
                </View>
          </View>
          
          <Text style={style.textLoginStyle}>Welcome</Text>
          <Text style={style.textLogin2Style}>Create your account</Text>
        
          <View style={style.container}>
            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setEmail(value))}
              placeholder='Email'
              placeholderTextColor='black'
              value={register.email}/>
  
            <TextInput
              style={[style.textInputStyle, {marginBottom:12}]}
              onChangeText={(value)=>dispatch(setPassword(value))}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor='black'
              value={register.password}/>

            <TextInput
              style={[style.textInputStyle, {marginBottom:12}]}
              onChangeText={(value)=>setConfirmPassword(value)}
              placeholder='Confirm Password'
              secureTextEntry={true}
              placeholderTextColor='black'
              value={register.confirmPassword}/>
  
            <LrsButton
              onPress={onTest}
              title="Sign up"/>
  
              
          </View>
            <View style={style.orr}>
                <Image source={ ICLine } />
                <Text style={style.textContinueStyle}>or</Text>
                <Image source={ ICLine } />
            </View>
  
          <View style={style.sosmed}>
            <Image source={ ICFb } />
            <Image source={ ICGgl } />
            <Image source={ ICLi } />
          </View>
  
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
    },
    orr:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft: 55,
        width: '50%'
    }
  }
  )