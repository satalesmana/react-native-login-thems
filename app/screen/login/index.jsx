import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Alert,
  Button
} from 'react-native';
import React from 'react'

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitAccount = () => {
    try {
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
  const onSubmitLoginRegis = () => {
    navigation.navigate('Register')
  }


  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 100}}>
          <ImageBackground
            source={ require('../../../assets/images/union3.png') }
            resizeMode="cover"
            style={{width:windowWidth, height:700, marginTop:250}}>
          </ImageBackground>
        </View>
            <View style={{marginBottom:100}}>
            <Text style={style.textLoginStyle}>Welcome Back!</Text>
            <Text style={style.textLoginStyle1}>Enter Your Username & Password</Text>
            </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Username</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle]}
            onChangeText={onChangePassword}
            placeholderTextColor='#c7c7c7'
            secureTextEntry={true}
            value={pasword}/>

        <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
            <Text style={[style.textSignin, { color: 'white' }]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={style.containerBottom}>
        <Text onPress={onSubmitLoginRegis} style={style.textContinueStyle}>
        Don't have account?
        </Text>

          <Text style={{fontWeight:'semibold', textAlign:'center'}}>Create now</Text>
        </View>
      </View>
    </ScrollView>


  );
}

const style = StyleSheet.create({
  container: {
    padding: 20
  },
  textContinueStyle: {
    textAlign: 'center',
  },
  signin: {
    width: '80%',
    alignSelf: 'center',
    height: 50,
    fontWeight: 'bold',
    marginBottom:50
  },
  textInputStyle: {
    height: 40,
    marginTop: 5,
    padding: 10,
    borderBottom: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textForgot: {
    marginTop: 5,
    textAlign: 'center',
    padding:15,
    color:'#1F41BB',
    fontWeight:'bold'
  },
  textLoginStyle: {
    fontSize: 32,
    marginRight:90,
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000000',

  },
  textLoginStyle1: {
    fontSize: 18,
    marginRight:50,
    fontWeight: 'semibold',
    textAlign: 'center',
    color:'#000000',

  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    fontWeight: 'regular',
    flex: 1,
    fontSize: 30,
  },
  textLogin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    fontWeight: 'regular',
    flex: 1,
    fontSize: 18
  },
  buttonLogin: {
    backgroundColor: '#000000',
    height: 60,
    width: '70%',
    alignSelf: "center",
    borderRadius: 50,
    flexDirection: "row",
    marginTop:50
  },
  textLoginStyle2: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'regular',
    textAlign: 'center',
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
    fontWeight: 'regular'
  },

  textContinueStyle2: {
    textAlign: 'center',
    color: '#1F41BB',
    fontWeight: 'bold',
    marginBottom:5
  },
})
