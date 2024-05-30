import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button, CheckBox, Alert, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

export default function RegisterScreen({navigation}){

  const [email, onChangeEmail] = React.useState('')
  const [phone, onChangePhone] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')
  const [confirmPassword, onChangeConfirmPassword] = React.useState('')

  const onSubmitLogin =()=>{
    try{
      if(email.trim().length === 0 ){
        throw Error('Email is required')
      }

      if(phone.trim().length === 0 ){
        throw Error('Password is required')
      }
      if(pasword.trim().length === 0 ){
        throw Error('Email is required')
      }

      if(confirmPassword.trim().length === 0 ){
        throw Error('Password is required')
      }

      navigation.navigate('Login')
    }catch(err){
      Alert.alert('Error', err.message, [
        {text: 'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  }
  const onhandleLogin1 = () => {
    navigation.navigate('Login')
  }
  return (

<ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/Vector2.png')}
          style={styles.image}
        />
      </View>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.container2}>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='demo@gmail.com'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[styles.textLabel,{marginTop:20}]}>Phone No</Text>
          <TextInput
            style={[styles.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePhone}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            value={phone}/>
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangePassword}
            placeholder='Password'
            placeholderTextColor='#c7c7c7'
            secureTextEntry={true}
            value={pasword}/>

          <Text style={[styles.textLabel,{marginTop:20}]}>Confirm Password</Text>
          <TextInput
            style={[styles.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangeConfirmPassword}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            secureTextEntry={true}
            value={confirmPassword}/>
                {/* button */}
          <TouchableOpacity onPress={onSubmitLogin} style={styles.buttonLogin}>
              <Text style={styles.textSignin}>Create an Account</Text>
            </TouchableOpacity>


            <View style={styles.containerBottom}>
          <Text>Already have an Account !</Text>
          <Text onPress={onhandleLogin1} style={{fontWeight:'bold', color:'#FF8D83'}}>Login</Text>
        </View>
    </View>
    </View>

                        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  container2: {
    padding:30
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    // height: 200,
    resizeMode: 'stretch',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:20,
    marginBottom:30,
    borderBottomColor:'#FF8D83',
    borderBottomWidth:3,
    width:105
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    width : '40%',
    padding: 16,
    borderRadius: 10,
    alignItems: 'flex-end',
    // justifyContent: 'center',
    marginBottom: 20,
    left:60,
  },
  buttonText: {
    color: '#FF8D83',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textLabel:{
    fontSize:12,
    fontWeight:'bold'
  },
  textInputStyle:{
    height: 40,
    marginTop: 12,
    padding: 10,
    borderBottomColor:'#333',
    borderBottomWidth:2,
  },
  checkboxContainer:{
    flex:1,
    flexDirection:'row',
    marginBottom: 30,
  },
  checkbox:{
    marginHorizontal:10
  },
  textForgot:{
    fontSize:10,
    fontWeight:'bold',
    color:'#FF8D83',
    marginLeft:150
  },
  textForgot2:{
    fontSize:10,
  },
  buttonLogin: {
    backgroundColor: '#FF8D83',
    height: 50,
    width: '100%',
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginTop:20,
    
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
  },
  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
    flex: 1,
    fontSize: 15
  },
});
