import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

export default function LoginScreen({navigation}){
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onLogin =()=>{
    try{
      if(email.trim().length === 0 ){
        throw Error('Email is required')
      }

      if(pasword.trim().length === 0 ){
        throw Error('Password is required')
      }

      navigation.navigate('Home')
    }catch(err){
      Alert.alert('Error', err.message, [
        {text: 'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  }
  const onLoginup = () => {
    navigation.navigate('Register')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/vector.png')} // Replace with your image path
          style={styles.image}
        />
      </View>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.container2}>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='demo@gmail.com'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[styles.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[styles.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePassword}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            secureTextEntry={true}
            value={pasword}/>
            <View style={{ width: '100%', flexDirection: 'row', marginBottom: '10%' }}>
                    <Text style={{ marginLeft: 8, flex: 8 }}>Remember me </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#4D7881'}}>Forget password?</Text>
                    </TouchableOpacity>
                </View>
                {/* button */}
                <View>

          <TouchableOpacity onPress={onLogin} style={styles.buttonLogin}>
              <Text style={styles.textSignin}>Login</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                <Text>Don’t have an Account ?</Text>
                        <Text onPress={onLoginup} style={{marginLeft: 5, color: '#FF8D83'}}>Sign up</Text>
                </View>
              </View>
    </View>
    </View>
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
    width: 429,
    // height: 200,
    resizeMode: 'stretch',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
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
    height: 60,
    width: '100%',
    alignSelf: "center",
    borderRadius: 10,
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
    fontSize: 18
  },
});
