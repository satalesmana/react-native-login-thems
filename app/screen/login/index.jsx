import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView,
    Alert
  } from 'react-native';  
  import { MyButton } from '../../components'    
 import { ICGoogle, ICFacebook, ICVictor } from '../../../assets'; 
  import React from 'react'
const windowWidth =Dimensions.get('window').width;

export default function LoginScreen({navigation}){
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    
    const onSubmitLogin=()=>{
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
      
    return(
        <ScrollView>
        <View>
        {/* <View style={style.statusbarStyle}>
             <Image source={require('../../../assets/images/statusbar.png')}/>
            </View> */}
            <View style={style.inputContainer}>
            <View style={style.inputView}>
              <TextInput
                style={style.inputText}
                placeholder="Login Account"
              
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
              />
              <Image
                source={require('../../../assets/images/User.png')}
                style={{ width: 15, height: 15, marginLeft:-90 }}
              />
            </View>
            </View>
            
                <Text style={{marginRight:20,fontSize:15}}>Welcome Back !</Text>
            <View style={{width:windowWidth,height:600}}>
                <ImageBackground source={require('../../../assets/images/lingkaransatu.png')}
                resizeMode="cover" 
                style={{width:windowWidth,height:406,width:445,marginBottom:-37,marginVertical:-210}}>
                    <ImageBackground source={require('../../../assets/images/lingkarandua.png')}
                    style={{width:windowWidth,height:342,width:342,marginBottom:50,marginLeft:100}}>
                    </ImageBackground>

                    <View style={style.MiniStyle}>
                        <Image source={require('../../../assets/images/Mini Shop.png')}/>
                    </View>
                </ImageBackground>
            </View>
            <View style={style.container}>
            <TextInput style={style.textInputStyle}onChangeText={onChangeEmail}placeholder='Enter Email id'placeholderTextColor='#c7c7c7' value={email}/>
            <TextInput style={style.textInputStyle}onChangeText={onChangePassword}placeholder='Enter Your Password'placeholderTextColor='#c7c7c7'value={password}/>
            <Text style={[style.textForgetStyle,{fontSize:15,fontWeight:'bold',textAlign:'center',marginRight:-200,marginBottom:20}]}>Forget Your Password?</Text>
            <Button
            onPress={() => navigation.navigate('Home')}
            color='#FFC600'
            title="Login"/>
            <View style={style.containerWith}>
                <Text style={[style.textContinueStyle,{textAlign:'center',marginTop:10}]}>──────── Or Continue With  ────────</Text>
            </View>
            </View>
            <View style={style.btnContainer}>
        <MyButton 
        text="Google"
        imgUrl={ICGoogle}/>
        <MyButton style={{marginLeft:15}}
          text="Facecbook"
          imgUrl={ICFacebook}/>
          <MyButton style={{marginLeft:15}}
          text="Apple"
          imgUrl={ICVictor}/>
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
        borderWidth:1,
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
        padding:30,
    },
    userStyle:{
    paddingHorizontal: 1,
    marginBottom: 4,
    flexDirection: "row",
    },
    loginView:{
      marginLeft:5,
      marginTop:10
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
      gap: 0.2,
      width: "73%",
      paddingHorizontal: 20,
      marginBottom: 5,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      paddingLeft: 5,
      paddingRight: 5,
      marginRight:100
    },
    inputText:{
      fontSize:15,
      fontWeight:'bold'
    }
    
    
})