import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import { MyButton } from '../../components'    
import { ICGoogle, ICFacebook } from '../../../assets';       
import React from 'react'

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen(){
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitLogin =()=>{
    alert(email)
  }

  return (
    <ScrollView>
      <View>
        <Text style={style.textLoginStyle}>Welcome To Our Apps</Text>
        <View style={{ width: windowWidth, height: 400}}>

              <View style={style.brandStyle}>
                <Image 
                  source={ require('../../../assets/images/home.png') } 
                />
              </View>

              <Pressable style={style.buttonNext} onPress={onSubmitLogin}>
              <Text style={style.text}>Next</Text>
              </Pressable>

        </View>
      
        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='type username or email'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePassword}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            value={pasword}/>

        </View>

        <View style={style.btnContainer}>
        <MyButton 
        text="Google"
        imgUrl={ICGoogle}/>

        <MyButton
          text="Facecbook"
          imgUrl={ICFacebook}/>
         </View>
       
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:20
  },
  buttonNext:{
    width:50,
    height:50,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textInputStyle:{
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle:{
    fontSize:22,
    marginTop:50,
    fontWeight:'400',
    textAlign:'center'
  },
  brandStyle:{
    width:380,
    marginTop:50,
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
    paddingLeft:30,
    paddingRight:30
  }
})