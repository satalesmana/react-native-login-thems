import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import { MyButton } from '../../components'
import { ICFacebook, ICGoogle, ICApple } from '../../../assets'
import React, { useState } from 'react'

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')
  const [loading, setLoading] = useState(false)

  const onSubmitLogin = async () => {
    try {
      if (email.trim().length === 0) {
        throw Error('Email is required')
      }

      if (password.trim().length === 0) {
        throw Error('Password is required')
      }

      setLoading(true)
      // Simulate a login request
      setTimeout(() => {
        navigation.navigate('Home')
        setLoading(false)
      }, 2000)
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
        <View style={{ width: windowWidth, height: 200 }}>
          <Text style={style.textLoginStyle}>Login Here</Text>
          <Text style={style.textLoginStyle2}>Welcome back you’ve been missed!</Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}></Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='Email'
            placeholderTextColor='gray'
            value={email} />

          <Text style={[style.textLabel, { marginTop: 20 }]}></Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder='Enter Password'
            placeholderTextColor='gray'
            secureTextEntry={true}
            value={password} />
          <Text style={style.textForgot}>Forgot Your Password?</Text>
          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Sign In</Text>
          </TouchableOpacity>

        </View>

        <Text onPress={onSubmitLoginRegis} style={style.textContinueStyle}>
          Create new Account
        </Text>
        <Text style={style.textContinueStyle2}>
          Or continue with
        </Text>

        <View style={style.btnContainer}>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICGoogle} />
          </View>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICFacebook} />
          </View>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICApple} />
          </View>
        </View>

        {loading && (
          <View style={style.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={style.loadingText}>Loading...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10
  },
  container: {
    padding: 20
  },
  textInputStyle: {
    height: 70,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
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
    textAlign: 'center',
    color:'#1F41BB',
  
  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
    fontSize: 18
  },
  buttonLogin: {
    backgroundColor: '#1F41BB',
    height: 60,
    width: '100%',
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textLoginStyle2: {
    fontSize: 22,
    marginTop: 25,
    fontWeight: 'bold',
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
    marginBottom: 50
  },
  textContinueStyle2: {
    textAlign: 'center',
    color: '#1F41BB',
    fontWeight: 'bold',
    marginBottom:5
  },
})