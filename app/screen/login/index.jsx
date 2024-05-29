import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { MyButton } from "../../components"
import { ICGoogle ,ICFacebook,ICApple,BGBawah,BGStatus,draw } from "../../../assets"
import React from "react" 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({ navigation }) {
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
    <View style={{ flex:1,width: windowWidth, height: windowHeight,backgroundColor:'white' }}>
         

      <View>
        <View style={{marginTop:50,alignItems:'center'}}>
          
          <Image
            source={draw}
    
            style={{ width: 300, height: 180}}
          />
            

          
        </View>

        <View style={style.container}>
          <Text style={{fontWeight:'normal',marginTop:20,fontSize:24,fontWeight:'bold'}}>Login Details</Text>
          
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
        </View>
        <View style={{alignItems:'center'}}>
          <View style={{marginLeft:30,marginRight:30}}>
        <TouchableOpacity onPress={onSubmitLogin}
 style={{
  backgroundColor: 'rgba(11, 110, 254, 1)',
  
  borderRadius: 5,
  height:50,
  width:320,
  alignItems:'center',
  justifyContent:'center'
}}>
  <Text style={{fontFamily:'Roboto',fontWeight:'bold',color:'white',fontSize:19}}>Login</Text>
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
          <Text style={{marginBottom:-28,marginTop:30}}>Or Sign Up With</Text>

        <View style={{marginTop:20,flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

          <Image source={require('../../../assets/images/reckiri.png')} style={{marginRight:60}} />

          <Image source={require('../../../assets/images/reckanan.png')} style={{marginLeft:60}} />
        </View>

        </View>
        <View style={{alignItems:'center'}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',width:'50%',marginTop:50}}>

          <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
          <Image source={ICGoogle} />

          </TouchableOpacity>
          
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
          <Image source={ICFacebook} />

          </TouchableOpacity>
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ECE9EC',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
          <Image source={ICApple} />

          </TouchableOpacity>
        </View>
        </View>

      </View>
      <View style={{alignItems:'center'}}>
      <Image source={BGBawah} style={{   
      
        bottom:40,
        width: '100%',
    }}
         />
         </View>
      
    </View>
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
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30
  }
});