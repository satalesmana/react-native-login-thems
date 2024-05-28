import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.signUpText}>Sign up</Text>
        <Text style={styles.subHeaderText}>Register your account now</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#6B6B6B"
          />
          <Icon name="person-outline" size={20} color="#6B6B6B" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#6B6B6B"
          />
          <Icon name="mail-outline" size={20} color="#6B6B6B" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#6B6B6B"
            secureTextEntry
          />
          <Icon name="lock-closed-outline" size={20} color="#6B6B6B" style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or Register with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:50, height:50, alignItems:'center', justifyContent:'center'}}>
          <Icon name="logo-google" size={30} color="#4285F4" />
        </TouchableOpacity  >
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:50, height:50, alignItems:'center', justifyContent:'center'}} >
          <Icon name="logo-facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:50, height:50, alignItems:'center', justifyContent:'center'}} >
          <Icon name="logo-twitter" size={30} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
        <Text style={styles.termsText}>By signing up, you are agree with our <Text style={styles.termsLink}>Terms & Conditions</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EEFB',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#6B6B6B',
    fontSize: 33,
    position: 'absolute',
    left: -125,
    top: 45,
  },
  signUpText: {
    color: '#6B4EFF',
    fontSize: 63,
    // fontWeight: 'bold',
    bottom: -15,
    right:-60,
    fontFamily: 'Roboto',
    opacity: 0.8
  },
  subHeaderText: {
    color: '#6B6B6B',
    fontSize: 16,
    right:-60,
    bottom: -15,
    marginBottom:30
  },
  form: {
    width:400,
    alignItems: 'center',
    backgroundColor: 'white',
    padding:20,
    borderRadius:20,
    left:20
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    width: 320,
    right:20
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#6B4EFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    width: 320,
    right:20
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#6B6B6B',
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%' ,
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#6B6B6B',
    fontSize: 14,
    marginVertical: 5,
  },
  loginLink: {
    color: '#6B4EFF',
    textDecorationLine: 'underline',
  },
  termsText: {
    color: '#6B6B6B',
    fontSize: 14,
    textAlign: 'center',
  },
  termsLink: {
    color: '#6B4EFF',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;