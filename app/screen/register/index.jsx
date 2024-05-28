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
    TouchableOpacity
  } from "react-native";
  import { MyButton } from "../../components"
  import { ICGoogle ,ICFacebook,ICApple,BGBawah,BGStatus } from "../../../assets"
  import React from "react" 
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState("");
    const [fullname, onChangeFullname] = React.useState("");
    const [pass, onChangePassword] = React.useState("");
  
    const onSubmitLogin = () => {
      // if (email == "gebby" && pass == 123) {
      //   alert("Sudah Benar");
      //   navigation.navigate("HomeScreen");
      // } else {
      //   alert("Salah");
      // }
  
      try {
        if(email.trim().length === 0){
          alert("Email tidak boleh kosong")
        }
        if(fullname.trim().length === 0){
          alert("Fullname tidak boleh kosong")
        }
        if(pass.trim().length === 0){
          alert("Password tidak boleh kosong")
        }
  
        navigation.navigate('Login')
      } catch (err) {
        Alert.alert('Error', err.message, [{
          text:'OK', onPress: () => {
            console.log('ERR')
          }},
        ]);
      }
    };
  
    return (
      <ScrollView style={{ width: windowWidth, height: windowHeight,backgroundColor:'white' }}>
           <Image source={BGStatus}/>

        <View style={{alignItems:'center'}}>
          <View style={{marginTop:50,alignItems:'center'}}>
            
            <Image
              source={require("../../../assets/images/drawpink.png")}
      
              style={{ width: 300, height: 180}}
            />
              
  
            
          </View>
  
          <View style={style.container}>
            <Text style={{fontFamily: 'Outfit', fontWeight:'normal',marginTop:20,fontSize:24}}>Register Account</Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeFullname}
              placeholder="Fullname"
              placeholderTextColor="#2F2E41"
              value={fullname}
            />
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder="Username , email & phone number"
              placeholderTextColor="#2F2E41"
              value={email}
            />
  
            
            <TextInput
              style={[style.textInputStyle, { marginBottom: -7 }]}
              onChangeText={onChangePassword}
              placeholder="Password"
              placeholderTextColor="#2F2E41"
              value={pass}
            />
        
             <Text style={style.textForgotStyle}>
          Forgot Password ?
          </Text>
          <TouchableOpacity onPress={onSubmitLogin}
   style={{
    backgroundColor: 'rgba(11, 110, 254, 1)',
    
    borderRadius: 5,
    height:50,
    width:370,
    alignItems:'center',
    justifyContent:'center'
  }}>
    <Text style={{fontFamily:('Roboto','Outfit'),fontWeight:'bold',color:'white',fontSize:19}}>Login</Text>
  </TouchableOpacity>
          </View>
  
         
  
          {/* <View style={style.btnContainer}>
            <MyButton
            text="Google"
            imgUrl={ICGoogle}/>
  
            <MyButton
              style={{marginLeft:15}}
              text="Facebook"
              imgUrl={ICFacebook}/>
          </View> */}
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
  
            <Image source={require('../../../assets/images/reckiri.png')} />
            <Text style={{paddingLeft:20,paddingRight:20}}>Or Sign Up With</Text>
            <Image source={require('../../../assets/images/reckanan.png')} />
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',width:'50%',marginTop:30}}>
  
            <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:'50%',alignItems:'center',justifyContent:'center'}}>
            <Image source={ICGoogle} />
  
            </TouchableOpacity>
            
            <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:'50%',alignItems:'center',justifyContent:'center'}}>
            <Image source={ICFacebook} />
  
            </TouchableOpacity>
            <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:'50%',alignItems:'center',justifyContent:'center'}}>
            <Image source={ICApple} />
  
            </TouchableOpacity>
          </View>
  
        </View>
        
        
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      padding: 20,
    },
    textInputStyle: {
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
    },
    textLoginStyle: {
      fontSize: 32,
      marginTop: 150,
      fontWeight: "bold",
      textAlign: "center",
      fontWeight:30
    },
    brandStyle: {
      marginTop: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    textLabel: {
      fontSize: 12,
      fontWeight: "bold",
    },
    btnContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      paddingLeft:20,
      paddingRight:20
    },
    textForgotStyle:{
      textAlign:'right',
      padding:10,
      marginBottom:20
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:30
    }
  });