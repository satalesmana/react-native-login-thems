import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
  } from 'react-native';           
import { MyButton } from '../compenents';
import { ICGoogle,ICFacebook,ICTwit } from '../../../assets';
import React from 'react';
  const windowWidth = Dimensions.get('window').width;
export default function LoginScreen(){
    const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitLogin =()=>{
    alert(email)
  }

    return(
        <ScrollView>
         <View>
         <View style={{ width: windowWidth, height:800}}>
         <View style={style.StatusbarStyle}>
         </View>
           
         <View style={style.HaStyle}>
         <Image 
          source={ require('../../../assets/images/logo H.png') } />
           <Text style={[style.textSignStyle,{fontSize:20,textAlign:'center',marginTop:20,fontWeight:'bold'}]}>Sign in your account</Text>
         </View>
         <View style={style.container}>
         <Text style={[style.textLabel,{marginTop:20,marginLeft:70}]}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='ex: jon.smith@email.com'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel,{marginTop:20,marginLeft:70}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, {marginBottom:12,}]}
            onChangeText={onChangePassword}
            placeholder='*********'
            placeholderTextColor='#c7c7c7'
            value={pasword}/>
             <Button
            onPress={onSubmitLogin}
            color='#00B140'
            title="Sign in"/>
            </View>
            <Text style={[style.textSignStyle,{fontSize:20,textAlign:'center',marginTop:20,fontWeight:'regular'}]}>or sign in with</Text>
         </View>
         <View style={style.btnContainer}>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICGoogle} />
          </View>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICFacebook} />
              </View>
          <View>
            <MyButton style={style.btnContainer1}
              imgUrl={ICTwit} />
              </View>
            </View>
         </View>
        </ScrollView>
     );
 }
 
 const style = StyleSheet.create({
     HaStyle:{
         marginTop:100,
         alignItems:'center',
         justifyContent:'center'
     },
     StatusbarStyle:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
     },
     textInputStyle:{
        height: 40,
        width:228,
        marginTop: 12,
        borderColor:'FAFAFA',
        padding: 10,
       textAlign:'center',
       marginLeft:100,
       btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        
      },
      btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        
      },
      btnContainer1:{
        marginRight:15
      },

     }
         
     })