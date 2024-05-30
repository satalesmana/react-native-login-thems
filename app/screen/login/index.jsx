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

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitLogin = () => {
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
       <View >
            <ImageBackground style={{width:windowWidth, height:30}}
              source={ require('../../../assets/images/bar.png') } 
              >
            </ImageBackground>
          </View>
      <View>
        <View style={{ width: windowWidth, height: 200 }}>
          <Text style={style.textLoginStyle}>Lets Sign you in</Text>
          <Text style={style.textLoginStyle2}>Welcome Back,
          </Text>
          <Text style={style.textLoginStyle3}>You have been missed 
          </Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}></Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='Email,phone & ussername'
            placeholderTextColor='gray'
            value={email} />

          <Text style={[style.textLabel, { marginTop: 5 }]}></Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 10 }]}
            onChangeText={onChangePassword}
            placeholder='Password'
            placeholderTextColor='gray'
            secureTextEntry={true}
            value={pasword} />
          <Text style={style.textForgot}>Forgot Your Password?</Text>
          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Sign In</Text>
          </TouchableOpacity>

        </View>

        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              width: "90%",
              alignSelf: "center",
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginLeft: 20,
                  marginRight: 20,
                  fontFamily: "Inter",
                  fontWeight: 734,
                  fontSize: 15,
                  marginTop: 5,
                }}
              >
                Or
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
       
        
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
      </View>
      <View>
      <Text style={style.textContinueStyle}>Dont have an account ?
          <Text onPress={onSubmitLoginRegis} style={style.textContinueStyle2}>Register now
          </Text>
          </Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20
  },
  textInputStyle: {
    height: 60,
    width: '100%',
    marginTop: 5,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
  },
  textForgot: {
    marginBottom: 10,
    marginTop: -20,
    textAlign: 'right',
    marginRight: 20,
    padding:15,
    color:'#000000',
    fontWeight:'bold'
  },
  textLoginStyle: {
    fontSize: 37,
    fontFamily: 'Outfit',
    marginTop: 30,
    marginRight: 105,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000000',
  
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
    marginTop: 0,
    width: '100%',
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
  textLoginStyle2: {
    fontSize: 25,
    marginTop: 15,
    fontFamily: 'Outfit',
    fontWeight: 'semibold',
    marginRight: 130,
    textAlign: 'left',
    width:240,
    alignSelf: 'center',
  },
  textLoginStyle3: {
    fontSize: 25,
    marginRight: 110,
    fontFamily: 'Outfit',
    fontWeight: 'medium',
    textAlign: 'left',
    width:260,
    alignSelf: 'center',
  },
  textLabel: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnContainer1:{
    marginRight:15,
  },
  textContinueStyle: {
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 20
  },
  textContinueStyle2: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom:5
  },
})