import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for eye icon
import { Entypo } from '@expo/vector-icons';
import {union3} from '../../../assets'
import { useDispatch } from "react-redux";


import ApiLib from "../../lib/ApiLib";
import { setEmail, setNama, setNim, setProdi, setTelp, setkelasCode } from '../../store/reducer/authReducer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
  const [nim, onChangeUserNim] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const dispatch = useDispatch()
  const [hidePassword, setHidePassword] = useState(true); // Password visibility state
  const [isUserNimFocused, setIsUserNimFocused] = useState(false); // Username focus state
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Password focus state

  const onSubmitAccount = async () => {
    try {
      setLoading(true); // Start loading

      if (nim.trim().length === 0) {
        throw Error('nim is required');
      }

      if (password.trim().length === 0) {
        throw Error('Password is required');
      } 

      const res = await ApiLib.post('/action/findOne', {
        "dataSource": "Cluster0",
        "database": "UAS",
        "collection": "users",
        "filter": {
          "nim": nim,
          "password": password
        }
      });

      if (res.data.document != null) {
        console.log(('data', res.data.document._id));
        dispatch(setEmail(res.data.document.email))
        dispatch(setNim(res.data.document.nim))
        dispatch(setNama(res.data.document.nama))
        dispatch(setProdi(res.data.document.prodi))
        dispatch(setkelasCode(res.data.document.kelasCode))
        dispatch(setTelp(res.data.document.telp))
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', "Nim & password tidak sesuai", [
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
    <ScrollView style={{windowWidth:windowWidth,windowHeight:windowHeight,backgroundColor:'#FFFFFF'}}>
      <View style={{ width: windowWidth, height: windowHeight }}>
        <Image
          
            source={union3}
           style={{width: windowWidth,position:'absolute',bottom:0,height:550}}
           
          />
        
        <View style={{ marginBottom: 100 ,marginTop:20}}>
          <Text style={style.textLoginStyle}>Welcome Back!</Text>
          <Text style={style.textLoginStyle1}>Enter Your Username & Password</Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Nim</Text>
          <TextInput
            style={[
              style.textInputStyle,
              { borderBottomColor: isUserNimFocused ? 'blue' : 'black' }
            ]}
            onChangeText={onChangeUserNim}
            placeholderTextColor='#c7c7c7'
            value={nim}
            onFocus={() => setIsUserNimFocused(true)}
            onBlur={() => setIsUserNimFocused(false)}
          />
              <Entypo name="users" size={24} color="black" style={{marginTop:-39,left:280}} />

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
            <TouchableOpacity style={{marginTop:20}} onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons style={{marginTop:-30,right:20}} name={hidePassword ? 'eye-off' : 'eye'} size={24} color="black" />
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
          <Text onPress={onSubmitLoginRegis} style={style.textContinueStyle}>
           Fotgotten Password?
          </Text>
          <Text style={{ fontWeight: 'semibold', textAlign: 'center' }} onPress={onSubmitLoginRegis}>
           Or Create a New Account
          </Text>
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
    marginBottom: 50,
    marginTop:55
  },
  textInputStyle: {
    height: 40,
    marginTop: 5,
    padding: 10,
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
    fontWeight: '900',
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
    fontSize: 24,
    fontWeight: 'light',
    opacity:0.5
  },
  textContinueStyle2: {
    textAlign: 'center',
    color: '#1F41BB',
    fontWeight: 'bold',
    marginBottom: 5
  },
  containerBottom: {
    marginTop: 20
  }
});