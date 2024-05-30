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
            <ImageBackground style={{width:windowWidth, height:30}}
              source={ require('../../../assets/images/bar.png') } 
              >
            </ImageBackground>
          </View>
          <View >
            <ImageBackground style={{width:374, height:280, marginTop:100, marginLeft:15}}
              source={ require('../../../assets/images/welcome.png') } 
              >
            </ImageBackground>
          </View>

          <View style={{marginTop:60}}>
            <Text style={style.textLoginStyle}>Team work all</Text>
            <Text style={style.textLoginStyle2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae, dictum justo, iaculis id. Cras a ac augue netus egestas semper varius facilisis id. </Text>
          </View>
          
          <View >
            <ImageBackground style={{width:100, height:80, marginTop:-10, marginLeft:170}}
              source={ require('../../../assets/images/elipse.png') } 
              >
            </ImageBackground>
          </View>

          <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
              <Text style={[style.textSignin, {color:'white'}]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmitLoginRegis} style={style.buttonLogin2}>
              <Text style={[style.textSignin, {color:'white'}]}>Register</Text>
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
        backgroundColor: '#000000',
        height: 40,
        width: '50%',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        flexDirection: "row",
        marginRight:0
      },
      buttonLogin2: {
        backgroundColor: '#6E77F6',
        height: 40,
        width: '50%',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        flexDirection: "row",
        marginRight:0,
        marginLeft: 0
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
        fontSize:10,
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