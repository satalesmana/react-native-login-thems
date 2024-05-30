import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
    Image,
    ScrollView,
    Alert
  } from 'react-native';  
  import { MyButton } from '../../components'   
  import { ICGoogle, ICFacebook, ICapple } from '../../../assets';  
  import React from 'react'
  const windowWidth = Dimensions.get('window').width;
  export default function LoginScreen({navigation}){
  const [username, onChangeUsername] = React.useState('')
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')

const onSubmitLogin=()=>{
        try{
          if(username.trim().length === 0 ){
            throw Error('username is required')
          }
            if(email.trim().length === 0 ){
              throw Error('Email is required')
            }
      
            if(pasword.trim().length === 0 ){
              throw Error('Password is required')
            }
      
            navigation.navigate('Register')
          }catch(err){
            Alert.alert('Error', err.message, [
              {text: 'OK', onPress: () => {
                console.log('ERR')
              }},
            ]);
          }
        }
    
    return(
        <ScrollView>
            <View style={style.statusbarStyle}>
             <Image source={require('../../../assets/images/Statusbar.png')}/>
             <View style={style.container}>
            <Text style={{fontSize:24,fontFamily:'Outfit',fontWeight:'bold',marginTop:80}}>Welcome back! Glad to see you, Again!</Text>
            <TextInput style={style.textInputStyle}onChangeText={onChangeEmail}placeholder='Email'placeholderTextColor='#c7c7c7' value={email}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Password'placeholderTextColor='#c7c7c7'value={password}/>
            <Text style={[style.textForgetStyle,{fontSize:15,fontWeight:'bold',textAlign:'center',marginRight:-200,marginBottom:20}]}>Forget Your Password?</Text>
            <Button
            onPress={() => navigation.navigate('Welcome')}
            color='#000000'
            title="Login"/>
            <Text style={[style.textContinueStyle,{textAlign:'center',marginTop:10}]}>Or Continue With</Text>
            <View style={style.btnContainer}>
            <MyButton style={{marginright:15}}
            text=""
            imgUrl={ICGoogle}/>
            <MyButton style={{margincenter:15}}
            text=""
            imgUrl={ICFacebook}/>
            <MyButton style={{marginLeft:15}}
            text=""
            imgUrl={ICapple}/>
            </View>
            <Text style={[style.textContinueStyle,{textAlign:'center',marginTop:10 ,color:'#0000ff'}]}>Already have an account? Register Now</Text>
            </View>
            </View>
        </ScrollView>
    );
}
const style=StyleSheet.create({
    container: { 
        padding:20,
        marginTop:-200
      },
    MiniStyle:{
       marginTop:-20,
       marginBottom:500,
       alignItems:'center',
       justifyContent:'center'
    },
    textInputStyle:{
        height:40,
        marginTop:10,
        borderWidth:0,
        padding:10,
        marginBottom:10
    },
    textExploreStyle:{
        fontSize:32,
        marginTop:400,
        fontWeight:'bold',
        textAlign:'center'
    },
    textLoremStyle:{
        fontSize:15,
       textAlign:'center',
       marginTop:50,
       marginBottom:50
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:30
    },
    container: { 
    padding:20
    },
})
