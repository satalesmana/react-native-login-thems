import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

  
  export default function VerificationScreen({ navigation }) {
    const [kode1, onChangeKode1] = React.useState("");
    const [kode2, onChangeKode2] = React.useState("");
    const [kode3, onChangeKode3] = React.useState("");
    const [kode4, onChangeKode4] = React.useState("");
  
    const onSubmitContinueSuccess = () => {
      try {
        if (kode1.trim().length === 0) {
          throw Error('')
        }
  
        if (kode2.trim().length === 0) {
            throw Error('')
          }
        if (kode3.trim().length === 0) {
          throw Error('')
        }
  
        if (kode4.trim().length === 0) {
            throw Error('')
          }
  
        navigation.navigate('Succes')
      } catch (err) {
        Alert.alert('Error', err.message, [
          {
            text: 'OK', onPress: () => {
              console.log('ERR')
            }
          },
        ]);
      }
    };

  return (
    <View style={style.container}>
      <Text style={style.tittle}>Verification Code</Text>
      <Text style={style.subtittle}>We have sent the verification code to your email address</Text>

      <View style={style.form}>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeKode1}
              placeholderTextColor="#c7c7c7"
              value={kode1}
              maxLength={1}
            />
  
            <TextInput
              style={[style.textInputStyle, { marginHorizontal: 12 }]}
              onChangeText={onChangeKode2}
              placeholderTextColor="#c7c7c7"
              value={kode2}
              maxLength={1}
            />
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeKode3}
              placeholderTextColor="#c7c7c7"
              value={kode3}
              maxLength={1}
            />
  
            <TextInput
              style={[style.textInputStyle, { marginHorizontal: 12 }]}
              onChangeText={onChangeKode4}
              placeholderTextColor="#c7c7c7"
              maxLength={1}
              value={kode4}
            />

          </View>
          <TouchableOpacity onPress={onSubmitContinueSuccess} style={style.buttonLogin}>
              <Text style={style.textSignin}>Continue</Text>
            </TouchableOpacity>
      </View>
);
};
  
const style = StyleSheet.create({
  container: {
    flex:1,
    padding:50,
    backgroundColor:'#fff'
  },
  container2:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  imagecontainer:{
    width:300,
    height:100,
    
    // resizeMode:'cover'
  },
tittle:{
  marginTop: 40,
  fontSize:25,
  fontWeight:'bold'
},
subtittle:{
  fontSize:20,
},
textLabel: {
  fontSize: 12,
  fontWeight: "bold",
},
textInputStyle: {
  height: 70,
  width:60,
  marginTop: 12,
  borderWidth: 1,
  borderRadius:15,
  padding: 10,
},
form:{
  marginVertical:10,
  flex:1,
  flexDirection:'row',
},
buttonLogin: {
  backgroundColor: '#FF8D4D',
  height: 60,
  width: '100%',
  alignSelf: "center",
  borderRadius: 30,
  flexDirection: "row",
},
textSignin: {
  textAlign: "center",
  marginVertical: "auto",
  color: "white",
  flex: 1,
  fontSize: 18
},
});