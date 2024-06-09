import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for eye icon

import ApiLib from "../../lib/ApiLib";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [hidePassword, setHidePassword] = useState(true); // Password visibility state
  const [isEmailFocused, setIsEmailFocused] = useState(false); // Email focus state
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Password focus state

  const onSubmitAccount = async () => {
    try {
      setLoading(true); // Start loading

      if (email.trim().length === 0) {
        throw Error('Email is required');
      }

      if (password.trim().length === 0) {
        throw Error('Password is required');
      } 

      const res = await ApiLib.post('/action/findOne', {
        "dataSource": "Cluster0",
        "database": "UAS",
        "collection": "users",
        "filter": {
          "email": email,
          "password": password
        }
      });

      if (res.data.document != null) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', "Username & password tidak sesuai", [
          { text: 'OK', onPress: () => console.log('ERR') },
        ]);
      }

    } catch (err) {
      Alert.alert('Error', err.message, [
        { text: 'OK', onPress: () => console.log('ERR') },
      ]);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const onSubmitLoginRegis = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 100 }}>
          <ImageBackground
            source={require('../../../assets/images/union3.png')}
            resizeMode="cover"
            style={{ width: windowWidth, height: 700, marginTop: 250 }}
          />
        </View>
        <View style={{ marginBottom: 100 }}>
          <Text style={style.textLoginStyle}>Welcome Back!</Text>
          <Text style={style.textLoginStyle1}>Enter Your Username & Password</Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Username</Text>
          <TextInput
            style={[
              style.textInputStyle,
              { borderBottomColor: isEmailFocused ? 'blue' : 'black' }
            ]}
            onChangeText={onChangeEmail}
            placeholderTextColor='#c7c7c7'
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />

          <Text style={[style.textLabel, { marginTop: 20 }]}>Password</Text>
          <View style={style.passwordContainer}>
            <TextInput
              style={[
                style.textInputStyle,
                { flex: 1, borderBottomColor: isPasswordFocused ? 'blue' : 'black' }
              ]}
              onChangeText={onChangePassword}
              placeholderTextColor='#c7c7c7'
              secureTextEntry={hidePassword}
              value={password}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={style.signin}>
            <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={[style.textSignin, { color: 'white' }]}>LOGIN</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.containerBottom}>
        <Text  style={style.textContinueStyle}>
        Don't have account?
        </Text>

          <Text style={{fontWeight:'semibold', textAlign:'center',textDecorationLine: 'underline'}} onPress={onSubmitLoginRegis} >Create now</Text>
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
    marginBottom: 50
  },
  textInputStyle: {
    height: 40,
    marginTop: 5,
    padding: 10,
    borderBottom: 'tomato',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 5,
  },
  textForgot: {
    marginTop: 5,
    textAlign: 'center',
    padding: 15,
    color: '#1F41BB',
    fontWeight: 'bold'
  },
  textLoginStyle: {
    fontSize: 32,
    marginRight: 90,
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  textLoginStyle1: {
    fontSize: 18,
    marginRight: 50,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#000000',
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoginStyle2: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'regular',
    textAlign: 'center',
    width: 240,
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
    marginBottom: 5
  },
  containerBottom: {
    marginTop: 20
  }
});
