import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface NavigationProps {
  navigation: {
    navigate: (route: string) => void;
    // Define other methods and properties of the navigation object if necessary
  };
}
const windowWidth = Dimensions.get('window').width;
const LoginScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.SignUpText}>Sign up</Text>
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.subHeaderText}>Register your account now</Text>
      </View>

      <View style={styles.sidebar}>
        {/* <ImageBackground source={require('../../assets/images/Group.png')} style={styles.sidebarimg}></ImageBackground> */}
      </View>
      <View style={styles.form}>
       <View style={{marginTop: 40}} >
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
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Welcome')} >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.forgottext} >Forgot Password?</Text>
        </View>
      </View>

      <Text style={styles.orText}>or login with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:70, height:70, alignItems:'center', justifyContent:'center'}}>
          <Icon name="logo-google" size={50} color="#4285F4"  />
        </TouchableOpacity  >
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:70, height:70, alignItems:'center', justifyContent:'center'}} >
          <Icon name="logo-facebook" size={50} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, width:70, height:70, alignItems:'center', justifyContent:'center'}} >
          <Icon name="logo-twitter" size={50} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Register')} >Create New Now</Text></Text>
        <Text style={styles.termsText}>By signing up, you are agree with our <Text style={styles.terms2Text}>Terms & Conditions</Text></Text>
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
    width: windowWidth
  },
  
  sidebar: {
    marginTop: 40,  
    right:285,
   width:60,
   height:450,
   backgroundColor:'#6C63FF',
   borderRadius:15
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  SignUpText: {
    color: '#6B6B6B',
    fontSize: 53,
    position: 'absolute',
    marginTop: 60,
    left:350
  },
  LoginText: {
    color: '#6B4EFF',
    fontSize: 103,
    // fontWeight: 'bold',
    bottom: -15,
    marginRight:220,
    fontFamily: 'Roboto',
    opacity: 0.8
  },
  subHeaderText: {
    color: '#6B6B6B',
    fontSize: 23,
    marginLeft:-180,
    bottom: -15,
    marginBottom:30
  },
  form: {
    width:550,
    height:450,
    alignItems: 'center',
    backgroundColor: 'white',
    padding:20,
    borderRadius:20,
    marginLeft:80,
    marginTop:-450
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 400,
    height:80,
    marginRight:65, 
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
    borderRadius: 40,
    alignItems: 'center',
    marginVertical: 10,
    width: 400,
    height:80 ,
    marginRight:65,
    alignContent:'center',
    marginBottom: 30
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 5
  },
  forgottext: {
   right:-280,
   fontFamily: 'Roboto',
   fontSize: 14
  },
  orText: {
    color: '#6B6B6B',
    marginVertical: 50,
    // marginRight: 25,
    fontSize: 18,
    fontFamily: 'Roboto',
    textAlign:'center',
    marginBottom: 20,
    opacity: 0.6
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%' ,
    marginBottom: 20,
    marginTop:10,
    alignItems:'center'
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#6B6B6B',
    fontSize: 15,
    marginVertical: 5,
    textAlign:'center'

  },
  loginLink: {
    color: '#6B4EFF',
    textDecorationLine: 'underline',
  },
  termsText: {
    color: '#6B6B6B',
    fontSize: 15,
  },
  terms2Text: {
    textDecorationLine: 'underline'
  }
})

export default LoginScreen;