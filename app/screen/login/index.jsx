import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { MyButton } from "../../components"
import { GitHub ,GitLab } from "../../../assets"
import React from "react"
import ApiLib from "../../lib/ApiLib"

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [pass, onChangePassword] = React.useState("");
  const [loading, setLoading] = React.useState(false); // Changed from "false" to false
  const onSubmitLogin =async ()=>{
    setLoading(true)
    try {
      if(email.trim().length === 0){
        alert("Email tidak boleh kosong")
      }
      if(pass.trim().length === 0){
        alert("Password tidak boleh kosong")
      }
      const res = await ApiLib.post('/action/findOne',{
              "dataSource": "AtlasCluster",
              "database": "ekireski",
              "collection": "ekireski",
              "filter": {
                "email": email,
                "password": pass,
                "number": number
              }
          }
      )

      setLoading(false);
      if (res.data.document != null) {
        navigation.replace("Home");
      } else {
        Alert.alert("Error", "Username & Password tidak sesuai", [
          {
            text: "OK",
            onPress: () => {
              console.log("ERR");
            },
          },
        ]);
      }
      navigation.navigate('Home')
    } catch (err) {
      Alert.alert('Error', err.message, [{
        text:'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  };

  const gotosignup = () => {
    navigation.navigate('Create')
  }
  if (loading) {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  
  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 110 }}>

            <Text style={style.textLoginStyle}>Hi, Welcome Back! 👋</Text>
            <Text style={{textAlign:'center',color:"#c7c7c7"}}>Hello again, you've been missed!</Text>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email Address</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="Enter Your Email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />

<Text style={[style.textLabel, {marginBottom:20,marginTop:15 }]}>Password</Text>
<Image source={require('../../../assets/images/mata.jpeg')} style={{marginBottom: -40, marginLeft:300, tintColor:"#c7c7c7"}}/>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 5 }]}
            onChangeText={onChangePassword}
            placeholder="Your Enter Your Password"
            placeholderTextColor="#c7c7c7"
            value={pass}
          />
          <View style={style.textForgot}>
          <Text style={{fontWeight:'bold', color:'black',marginRight: 70}}>Remember Me</Text>
          <Text style={{fontWeight:'bold', color:'red',marginLeft: 60}}>Forgot Password</Text>
        </View>
          <Button color="#4E0189" title="Login"/>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7' }} />
            <View>
              <Text style={{ textAlign: 'center', marginLeft: 20, marginRight: 20, color: "#c7c7c7"}}>Or With</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7' }} />
          </View>

        <View style={style.btnContainer}>
          <MyButton
          style={{marginLeft:20}}
          text="GitHub"
          Image={GitHub}/>

          <MyButton
            style={{marginLeft:20}}
            text="GitLab"
            Image={GitLab}/>
        </View>

        <View style={style.containerBottom}>
          <Text>Don't have an account? </Text>
          <Text onPress={gotosignup} style={{fontWeight:'blue', color:'#4E0189'}}> Sign Up </Text>
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
    borderRadius:10,
    borderColor:"#c7c7c7"
  },
  textLoginStyle: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: 'center'

  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color : '#4E0189'
  },
  btnContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:15,
    paddingRight:15,
    marginTop:15,
  },
  textContinueStyle:{
    textAlign:'center',
    padding:10
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30,
    marginTop:150
  },
  textForgot: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    marginBottom:20
  }
});