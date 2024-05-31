import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity
  } from 'react-native';   
import { MyButton } from '../../components'      
import React from 'react'
import { MySigin } from '../../components';


  export default function WelcomeScreen({navigation}){
  
    const onSubmitAccount = () => {
        navigation.navigate('Login')
      }
    
   
  
    return (
      <ScrollView>
        <View>
          <View>
            <ImageBackground style={style.image}
              source={ require('../../../assets/images/Character-working-laptop-sitting-chair.png') } 
              >
            </ImageBackground>
          </View>

          <View style={{marginTop:150}}>
            <Text style={style.textLoginStyle}>Welcome to our app</Text>
              <Text style={style.textLoginStyle2}>Please login to continue to your account.</Text>
          </View>

          <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
              <Text style={[style.textSignin, {color:'white'}]}>Start our journey</Text>
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
    image: {
        padding: 130,
        marginTop: 30,
        justifyContent:'center',
        resizeMode:"cover"
    },
    
    buttonLogin: {
        backgroundColor: '#367AFF',
        height: 40,
        width: '100%',
        borderRadius: 8,
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
          justifyContent: 'center'
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