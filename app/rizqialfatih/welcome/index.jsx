import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';   
    
import React from 'react'
const windowWidth = Dimensions.get('window').width;


export default function WelcomeScreen({navigation}){

  const onSubmitAccount = () => {
      navigation.navigate('Register')
    }
    const onSubmitLoginRegis = () => {
      navigation.navigate('Login')
    }

  return (
    <ScrollView>
      <View>
        <View style={style.Image}>
          <Image 
            source={ require('../../../assets/images/gambarwelcome.png') } 
            >
          </Image>
        </View>

        <View style={{marginTop:60}}>
          <Text style={style.textLoginStyle}>Welcome to AppName</Text>
          <Text style={style.textLoginStyle2}>Lorem ipsum dolor elit elit elit Volupta consectetur adipisicing elit. reprehenderit iusto</Text>
        </View>

        <View style={style.signin}>
        <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
            <Text style={[style.textSignin, {color:'white'}]}>Create an Account</Text>
          </TouchableOpacity>
          </View>
          <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitLoginRegis} style={style.buttonLogin2}>
            <Text style={style.textSignin}>Login</Text>
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
  Image:{
    marginHorizontal:50,

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
      backgroundColor: '#4D7881',
      height: 40,
      width: '90%',
      borderRadius: 8,
      flexDirection: "row",
      alignSelf:'center'
    },
    buttonLogin2: {
      borderColor:'#4D7881',
      height: 40,
      width: '90%',
      borderWidth:2,
      borderRadius: 8,
      flexDirection: "row",
      alignSelf:'center'
    },
    textSignin: {
      textAlign: "center",
      marginVertical: "auto",
      flex: 1,
      fontSize: 13,
      color:'#4D7881'
    },
    signin:{
        width: '70%',
        alignSelf:'center',
        height: 50,
        fontWeight:'bold',
        marginVertical: 5
    },
  // Text
  textLoginStyle:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  textLoginStyle2:{
      fontSize:12,
      textAlign: 'center',
      width:300,
      alignSelf: 'center',
      marginVertical:12
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