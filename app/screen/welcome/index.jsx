import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    TouchableOpacity
  } from 'react-native';   
      
import React from 'react'
const windowWidth = Dimensions.get('window').width;


  export default function WelcomeScreen({navigation}){
  
    const onSubmitAccount = () => {
        navigation.navigate('Login')
      }
      const onSubmitLoginRegis = () => {
        navigation.navigate('Register')
      }
    // const onSubmitLogin =()=>{
    //   try{
    //     if(email.trim().length === 0 ){
    //       throw Error('Email is required')
    //     }
  
    //     if(pasword.trim().length === 0 ){
    //       throw Error('Password is required')
    //     }
  
    //     navigation.navigate('Home')
    //   }catch(err){
    //     Alert.alert('Error', err.message, [
    //       {text: 'OK', onPress: () => {
    //         console.log('ERR')
    //       }},
    //     ]);
    //   }
  
    // }
  
    return (
      <ScrollView>
        <View>
          <View >
            <ImageBackground style={{width:windowWidth, height:400}}
              source={ require('../../../assets/images/welcome.png') } 
              >
            </ImageBackground>
          </View>

          <View style={{marginTop:60}}>
            <Text style={style.textLoginStyle}>Lorem ipsum dolor.</Text>
            
            <Text style={style.textLoginStyle2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
          </View>

          <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
              <Text style={[style.textSignin, {color:'white'}]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmitLoginRegis} style={style.buttonLogin2}>
              <Text style={style.textSignin}>Sign-Up</Text>
            </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: { 
      padding:20
    },
    // image: {
    //     padding: 130,
    //     marginTop: 50,
    //     justifyContent:'center',

    // },
    // SIGN IN
    // signin2:{
    //     textAlign: "center",
    //   marginVertical: "auto",
    // //   color: "white",
    //   fontSize: 18
    // },
    textInputStyle:{
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonLogin: {
        backgroundColor: '#45484A',
        height: 40,
        width: '50%',
        borderRadius: 100,
        flexDirection: "row",
        marginRight:10
      },
      buttonLogin2: {
        backgroundColor: '#E5EFF8',
        height: 40,
        width: '50%',
        borderRadius: 100,
        flexDirection: "row",
        marginRight:10
      },
      textSignin: {
        textAlign: "center",
        marginVertical: "auto",
        fontWeight:'bold',
        flex: 1,
        fontSize: 15,
      },
      signin:{
          flexDirection: 'row',
          width: '70%',
          alignSelf:'center',
          height: 50,
          fontWeight:'bold',
      },
    // Text
    textLoginStyle:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      alignSelf: 'center',
      color: '#000000'
    },
    textLoginStyle2:{
        fontSize:12,
        textAlign: 'center',
        width:240,
        alignSelf: 'center',
        marginVertical:15
      },
    //   
    brandStyle:{
      marginTop:100,
      alignItems:'center',
      justifyContent:'center'
    },
    textLabel:{
      fontSize:12,
      fontWeight:'bold'
    },
    btnContainer:{
      flex:1,
      flexDirection:'row',
      paddingLeft:20,
      paddingRight:20
    },
    textContinueStyle:{
      textAlign:'center',
      padding:10
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:30
    }
  })