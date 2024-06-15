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
import { 
    setEmail, 
    setPassword, 
    resetRegisterData, 
    setFirstName, 
    setLastName, 
    setNim, 
    setProdi, 
    setClassCode, 
    setNoTlp } from '../../store/reducer/registerReducer'
import ApiLib from "../../lib/ApiLib"
import React from 'react'
  
const windowWidth = Dimensions.get('window').width;
  
export default function Register({navigation}){
  const [confirmPassword, setConfirmPassword] = useState(null)
  const register = useSelector((state) => state.register.formSignUp)
  const dispatch = useDispatch()
  
  const onSignUp =()=>{
      try{
          if( register.firstName === null || register.firstName === ""){
              throw Error('first name is required')
          }
          if( register.lastName === null || register.lastName === ""){
            throw Error('last name is required')
          }
          if( register.nim === null || register.nim === ""){
            throw Error('NIM is required')
          }
          if( register.prodi === null || register.prodi === ""){
            throw Error('program study is required')
          }
          if( register.classCode === null || register.classCode === ""){
            throw Error('class code is required')
          }
          if( register.noTelp === null || register.noTelp === ""){
            throw Error('phone number is required')
          }

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
          
          let message  = `Name                   : ${register.firstName}  ${register.lastName}\n`
              message += `NIM                      : ${register.nim} \n`
              message += `Program Study  : ${register.prodi} \n`
              message += `Class Code         : ${register.classCode} \n`
              message += `Phone Number  : ${register.noTelp} \n`
              message += `Email                   : ${register.email} \n`

          Alert.alert('Confirm', message, [
              {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
              },{
                text: 'Submit', onPress: async () => {
                   const res =  await ApiLib.post('/action/insertOne',
                        {
                            "dataSource": "Cluster0",
                            "database": "kelompok9",
                            "collection": "users",
                            "document": register
                        }
                    )

                    if(res.data?.insertedId){
                        dispatch(resetRegisterData())
                        navigation.navigate("Login")
                    }
                    
                }
            },
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
              onChangeText={(value)=>dispatch(setFirstName(value))}
              placeholder='First Name'
              placeholderTextColor='black'
              value={register.firstName}/>
            
            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setLastName(value))}
              placeholder='Last Name'
              placeholderTextColor='black'
              value={register.lastName}/>
            
            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setNim(value))}
              placeholder='NIM'
              placeholderTextColor='black'
              value={register.nim}/>

            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setProdi(value))}
              placeholder='Program Study'
              placeholderTextColor='black'
              value={register.prodi}/>

            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setClassCode(value))}
              placeholder='Class Code'
              placeholderTextColor='black'
              value={register.classCode}/>

            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setNoTlp(value))}
              placeholder='Phone Number'
              placeholderTextColor='black'
              value={register.noTelp}/>
            
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
              onPress={onSignUp}
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
      paddingTop : 10,
      padding:100
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