import React, { useState } from 'react';
import { View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions} 
  from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;

export default function RegisterScreen({navigation}){
  const goRegister=()=>{
    navigation.navigate("Welcome")
  }
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <ScrollView>
    <View style={{ width: windowWidth }}>
            <View style={{ width: windowWidth, marginTop: 50 }}>
                <Image
                    source={require('../../../assets/images/FrameRegister.png')}
                    style={{ alignSelf: 'flex-end' }}
                />
            </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          onChangeText={setFullName}
        />
        </View>
        <View style={styles.formContainer1}>
        <TextInput
          style={styles.input}
          placeholder="Valid Email"
          onChangeText={setFullName}
        />
        <View style={styles.formContainer2}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={setFullName}
        />
        </View>
        <View style={styles.formContainer3}>
        <TextInput
          style={styles.input}
          placeholder="Strong Password"
          onChangeText={setFullName}
        />
                </View>
          <Text style={styles.termsText}>By checking the box you agree to our Terms and Conditions.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={goRegister}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Already a member? Log In</Text>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center',
    marginTop:80
  },
  slogan: {
    fontSize: 16,
    color: '#000',
    textAlign:'center'
  },
  formContainer: {
    width: '80%',
    marginLeft: 35 

  },
    formContainer1: {
      width: '80%', 
      marginLeft: 35 
  },
formContainer2: {
  width: '100%', 
  marginRight: 15
},
formContainer3: {
  width: '100%', 
  marginRight: 15
},
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  termsText: {
    fontSize: 12,
    color: '#000',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    marginLeft: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    witdh: '70%',
    height: '50%'
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});