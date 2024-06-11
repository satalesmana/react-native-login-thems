import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, resetRegisterData,setUsername } from '../../store/reducer/registerReducer';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for eye icon
import ApiLib from "../../lib/ApiLib"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegisterScreen({ navigation }) {
  const register = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true); // Password visibility state
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true); // Confirm password visibility state
  const [isEmailFocused, setIsEmailFocused] = useState(false); // Email focus state
  const [isUsernameFocused, setIsUsernameFocused] = useState(false); // Username focus state
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Password focus state
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false); // Confirm password focus state

  const onSubmitLogin = async () => {
    try {
      if (register.email === null || register.email === "") {
        throw new Error('Email is required');
      }
      if (register.username === null || register.username === "") {
        throw new Error('Username is required');
      }
      if (register.password === null || register.password === "") {
        throw new Error('Password is required');
      }
      if (confirmPassword === null || confirmPassword === "") {
        throw new Error('Confirm password is required');
      }
      if (confirmPassword !== register.password) {
        throw new Error("Confirm password doesn't match");
      }

      Alert.alert('Confirm', 'Are you sure you want to submit?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Submit',
          onPress: async () => {
            try {
              const res = await ApiLib.post('/action/insertOne', {
                dataSource: "Cluster0",
                database: "UAS",
                collection: "users",
                document: register
              });

              if (res.data?.insertedId) {
                dispatch(resetRegisterData());
                navigation.navigate("Login");
              }
            } catch (error) {
              console.error('Error inserting document:', error);
              alert('Failed to submit data');
            }
          }
        },
      ]);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={{windowWidth:windowWidth,windowHeight:windowHeight,backgroundColor:'#FFFFFF'}}>
      <View style={{ width: windowWidth, height: windowHeight}}>
        <View style={{marginTop:-70}}>
          <Text style={style.textLoginStyle}>Create</Text>
          <Text style={style.textLoginStyle2}>Account :)</Text>
          </View>
          <Image
              source={require('../../../assets/images/bulat.png')}
            
              style={{ width:windowWidth,height:700,position:'absolute',marginTop:30}}
            />
         
       
       
        <View style={style.container}>
          <Text style={style.textLabel}></Text>
          <TextInput
            style={[
              style.textInputStyle,
              { borderBottomColor: isEmailFocused ? 'blue' : 'black' }
            ]}
            value={register.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Enter Email id"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <Text style={style.textLabel}></Text>
          <TextInput
            style={[
              style.textInputStyle,
              { borderBottomColor: isUsernameFocused ? 'blue' : 'black' }
            ]}
            value={register.username}
            onChangeText={(value) => dispatch(setUsername(value))}
            placeholder="Create Username"
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
          />

          <Text style={[style.textLabel, { marginTop: 0 }]}></Text>
          <View style={style.passwordContainer}>
            <TextInput
              style={[
                style.textInputStyle,
                { flex: 1, borderBottomColor: isPasswordFocused ? 'blue' : 'black' }
              ]}
              value={register.password}
              onChangeText={(value) => dispatch(setPassword(value))}
              placeholder="Create Password"
              secureTextEntry={hidePassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
          <View style={style.passwordContainer}>
            <TextInput
              style={[
                style.textInputStyle,
                { flex: 1, borderBottomColor: isConfirmPasswordFocused ? 'blue' : 'black' }
              ]}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              placeholder="Confirm Password"
              secureTextEntry={hideConfirmPassword}
              onFocus={() => setIsConfirmPasswordFocused(true)}
              onBlur={() => setIsConfirmPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
              <Ionicons name={hideConfirmPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
            <Text style={style.textSignin}>Sign Up</Text>
          </TouchableOpacity>
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
    textAlign: 'right',
    padding: 15,
    color: '#1F41BB',
    fontWeight: 'bold'
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 140,
    fontWeight: '900',
    textAlign: 'left',
    marginLeft: 30,
    color: '#000000',
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
    marginTop: 40
  },
  textLoginStyle2: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'left',
    width: 240,
    marginLeft: 30,
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
  btnContainer1: {
    marginRight: 15
  },
  textContinueStyle: {
    textAlign: 'center',
    marginBottom: 70
  },
  textContinueStyle2: {
    textAlign: 'center',
    color: '#1F41BB',
    fontWeight: 'bold',
    marginBottom: 5
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30
  }
});
