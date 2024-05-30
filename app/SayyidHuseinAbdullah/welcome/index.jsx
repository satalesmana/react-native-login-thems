
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


export default function WelcomeScreen({navigation}) {

  const onSubmitLoginRegis = () => {
      navigation.navigate('Login')
    }
    

  return (
    <ScrollView>
      <View style={style.welcomecontainer}>
      <View style={style.header}>
        <Image
          source={require('../../../assets/images/vector.png')} // Replace with your image path
          style={style.image}
        />
      </View>

        <View style={{marginTop:60}}>
          <Text style={style.textLoginStyle}>Welcome</Text>
          <Text style={style.textLoginStyle2}>lorem lorem lorem lorem lorem lorem lorem</Text>
        </View>

        
          <TouchableOpacity onPress={onSubmitLoginRegis} style={style.buttonLogin2}>
            <Text style={style.textSignin}>Register</Text>
          </TouchableOpacity>
          </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:20
  },
  welcomecontainer:{
      flex: 1,
  },
  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 429,
    height: 300,
    resizeMode: 'stretch',
    
  },
  signin:{
      flexDirection: 'row',
      width: '70%',
      alignSelf:'flex-end',
      height: 50,
      fontWeight:'bold',
      borderWidth:1,

    },
    buttonLogin2: {
      borderWidth:2,
      borderColor:'#FF8D83',
      height: 40,
      width: '30%',
      borderRadius: 20,
      marginVertical:50,
      flexDirection: "row",
      alignSelf:'flex-end'

    },
    textSignin: {
      textAlign: "center",
      marginVertical: "auto",
      fontWeight:'bold',
      flex: 1,
      fontSize: 15,
      color: '#FF8D83'},
      textLoginStyle:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        alignSelf: 'center',
        color: '#FF8D83'
      },
      textLoginStyle2:{
          fontSize:12,
          textAlign: 'center',
          width:240,
          alignSelf: 'center',
          marginVertical:15
        },
})