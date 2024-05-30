import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert
  } from 'react-native';
  import { MyButton } from '../../components'
  import { ICFacebook, ICGoogle, ICApple } from '../../../assets'
  import React from 'react'
  
  const windowWidth = Dimensions.get('window').width;
  
  export default function RegisterScreen({ navigation }) {
    const [name, onChangeName] = React.useState('')
    const [bussiness, onChangeBussiness] = React.useState('')
    const [phone, onChangePhone] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [pasword, onChangePassword] = React.useState('')
   
  
    const onSubmitLogin = () => {
      try {
        if (name.trim().length === 0) {
          throw Error('Name is required')
        }

        if (bussiness.trim().length === 0) {
          throw Error('Bussiness is required')
        }

        if (phone.trim().length === 0) {
          throw Error('Phone is required')
        }

        if (email.trim().length === 0) {
          throw Error('Email is required')
        }
  
        if (pasword.trim().length === 0) {
          throw Error('Password is required')
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
        <View >
            <ImageBackground style={{width:windowWidth, height:30}}
              source={ require('../../../assets/images/bar.png') } 
              >
            </ImageBackground>
          </View>
        <View>
          <View style={{ width: windowWidth, height: 200 }}>
            <Text style={style.textLoginStyle}>Lets Register Account</Text>
            <Text style={style.textLoginStyle2}>Hello user,you have </Text>
<Text style={style.textLoginStyle3}>  a greatful journey</Text>
          </View>
  
          <View style={style.container}>
            <Text style={style.textLabel}></Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeName}
              placeholder='Name'
              placeholderTextColor='gray'
              value={name} />
  
            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onChangeBussiness}
              placeholder='Business name'
              secureTextEntry={true}
              placeholderTextColor='gray'
              value={bussiness} />
            
            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onChangePhone}
              placeholder='Phone'
              placeholderTextColor='gray'
              secureTextEntry={true}
              value={phone} />

<Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onChangeEmail}
              placeholder='Email'
              placeholderTextColor='gray'
              secureTextEntry={true}
              value={email} />

<Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={onChangePassword}
              placeholder='Password'
              placeholderTextColor='gray'
              secureTextEntry={true}
              value={pasword} />

            <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
              <Text style={style.textSignin}>Sign In</Text>
            </TouchableOpacity>
  
          </View>
  
          <Text  style={style.textContinueStyle}>
          Already have an account ?
          <Text onPress={onSubmitAccount} style={style.textContinueStyle2}>
            Login
          </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      marginTop: -60,
      padding: 20
    },
    textInputStyle: {
      height: 49,
      marginTop: 1,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
    },
    textForgot: {
      marginTop: 5,
      textAlign: 'right',
      padding:15,
      color:'#1F41BB',
      fontWeight:'bold'
    },
    textLoginStyle: {
      fontSize: 25,
      marginTop: 15,
      fontFamily: 'Outfit',
      fontWeight: 'bold',
      marginRight: 125,
      textAlign: 'left',
      width:240,
      alignSelf: 'center',
    
    },
    textSignin: {
      textAlign: "center",
      marginVertical: "auto",
      color: "white",
      flex: 1,
      fontSize: 18
    },
    buttonLogin: {
      backgroundColor: '#000000',
      height: 49,
      marginTop: 20,
      width: '100%',
      alignSelf: "center",
      borderRadius: 5,
      flexDirection: "row",
    },
    textLoginStyle2: {
      fontSize: 25,
      fontFamily: 'Outfit',
      marginTop: 0,
      marginRight: 145,
      fontWeight: 'medium',
      textAlign: 'center',
      color:'#000000',
    },
    textLoginStyle3: {
      fontSize: 25,
      marginTop: 0,
      marginRight: 150,
      fontFamily: 'Outfit',
      fontWeight: 'medium',
      textAlign: 'left',
      width:240,
      alignSelf: 'center',
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
    
    

    textContinueStyle: {
      textAlign: 'center',
      marginBottom: 50
    },
    textContinueStyle2: {
      textAlign: 'center',
      color: '#000000',
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