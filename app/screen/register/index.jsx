import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert,
    ImageBackground
  } from 'react-native';
  import { MyButton } from '../../components'
  import { ICFacebook, ICGoogle, ICApple } from '../../../assets'
  import React from 'react'
  
  const windowWidth = Dimensions.get('window').width;
  
  export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState('')
    const [pasword, onChangePassword] = React.useState('')
    const [confirm_pasword, onConfirmPassword] = React.useState('')
  
    const onSubmitLogin = () => {
      try {
        if (email.trim().length === 0) {
          throw Error('Email is required')
        }
  
        if (pasword.trim().length === 0) {
          throw Error('Password is required')
        }

        if (confirm_pasword.trim().length === 0) {
            throw Error('Password')
          }
  
        navigation.navigate('Home')
      } catch (err) {
        Alert.alert('Error', err.message, [
          {
            text: 'OK', onPress: () => {
              console.log('ERR')
            }
          },
        ]);
      }
  
    }

    const onSubmitAccount = () => {
        navigation.navigate('Login')
    }
  
    return (
      <ScrollView>
        <View>
          <View style={{ width: windowWidth, height: 200 }}>
            <Text style={style.textLoginStyle}>Create</Text>
            <Text style={style.textLoginStyle2}>Account :)</Text>
          </View>
          <View>
          <ImageBackground
            style={style.image}
            source={require("../../../assets/images/union2.png")}
          ></ImageBackground>
        </View>
          <View style={style.container}>
            <Text style={style.textLabel}></Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder='Email'
              placeholderTextColor='gray'
              value={email} />
  
            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onChangePassword}
              placeholder='Password'
              placeholderTextColor='gray'
              value={pasword} />
            
            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onConfirmPassword}
              placeholder='Confirm Password'
              placeholderTextColor='gray'
              value={confirm_pasword} />  

            <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
              <Text style={style.textSignin}>Sign Up</Text>
            </TouchableOpacity>
  
          </View>
  
          
          
          <View style={style.btnContainer}>
         
            </View>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      padding: 20
    },
    textInputStyle: {
      height: 70,
      marginTop: 5,
      padding: 10,
      borderBottom: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    textForgot: {
      marginTop: 5,
      textAlign: 'right',
      padding:15,
      color:'#1F41BB',
      fontWeight:'bold'
    },
    textLoginStyle: {
      fontSize: 32,
      marginTop: 50,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft:30,
      color:'#000000',
    
    },
    textSignin: {
      textAlign: "center",
      marginVertical: "auto",
      color: "white",
      flex: 1,
      fontSize: 25
    },
    buttonLogin: {
      backgroundColor: '#000000',
      height: 60,
      width: '50%',
      alignSelf: "center",
      borderRadius: 55,
      flexDirection: "row",
      marginTop:40
    },
    textLoginStyle2: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'left',
      width:240,
      marginLeft:30,
      alignSelf: 'left',
    },
    brandStyle: {
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textLabel: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    btnContainer1:{
      marginRight:15
    },
    textContinueStyle: {
      textAlign: 'center',
      marginBottom: 70
    },
    textContinueStyle2: {
      textAlign: 'center',
      color: '#1F41BB',
      fontWeight: 'bold',
      marginBottom:5
    },
    containerBottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30
    }
  })