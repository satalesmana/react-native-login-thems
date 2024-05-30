import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default function RegisterScreen({navigation}){
  const goLogin=()=>{
    navigation.navigate("Login")
  }      
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
                    source={require('../../../assets/images/Frame 2.png')}
                    style={{ alignSelf: 'flex-end' }}
                />
            </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
        </View>
        <View style={styles.formContainer1}>
        <TextInput
          style={styles.input}
          placeholder="Valid Email"
        />
        <View style={styles.formContainer2}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
        />
        </View>
        <View style={styles.formContainer3}>
        <TextInput
          style={styles.input}
          placeholder="Strong Password"
        />
                </View>
          <Text style={styles.termsText}>By checking the box you agree to our Terms and Conditions.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={goLogin}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.loginText}>Already a member? Log In</Text>
      </View>
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
    marginTop: 10
  },
  termsText: {
    fontSize: 12,
    color: '#000',
    marginLeft: 25
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 75,
    width: '80%',
    marginLeft: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});
