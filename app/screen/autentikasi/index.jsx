import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";

  export default function OtpScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState("");
    const [phone, onChangeNumber] = React.useState("");
  
    const onSubmitContinue = () => {
      try {
        if (email.trim().length === 0) {
          throw Error('Email is required')
        }
  
        if (phone.trim().length === 0) {
            throw Error('Phone')
          }
  
        navigation.navigate('Verify')
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
    <ScrollView>
    <View style={style.container}>
    <View style={style.container2}>
      <View style={style.imagecontainer}>
        <Image
          source={require("../../../assets/images/Image.png")}
          style={style.image}>
        </Image>
      <Text style={style.tittle}>OTP Verification</Text>
      <Text style={style.subtittle}>Enter email and phone number to send one time Password</Text>

      <View style={style.form}>
            <Text style={style.textLabel}>Email</Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={onChangeEmail}
              placeholder="Username or Email"
              placeholderTextColor="#c7c7c7"
              value={email}
              />

            <View>
            <Text style={[style.textLabel, { marginTop: 20 }]}>Phone Number</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={onChangeNumber}
              placeholder="Phone Number"
              placeholderTextColor="#c7c7c7"
              value={phone}
              />
              </View>
          </View>
          <TouchableOpacity onPress={onSubmitContinue} style={style.buttonLogin}>
              <Text style={style.textSignin}>Continue</Text>
            </TouchableOpacity>

            {/* <Button
            onPress={onSubmitContinue}
            title="Continue"
          /> */}
      </View>
    </View>
    </View>
          </ScrollView>
);
};
  
const style = StyleSheet.create({
  container: {
padding:20,
    backgroundColor:'#fff'
  },
  container2:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  imagecontainer:{
    // width:300,
    // height:100,
    
    // resizeMode:'cover'
  },
tittle:{
  marginTop: 40,
  fontSize:25,
  fontWeight:'bold'
},
subtittle:{
  fontSize:15,
},
textLabel: {
  fontSize: 12,
  fontWeight: "bold",
},
textInputStyle: {
  height: 70,
  width:'auto',
  marginTop: 12,
  borderWidth: 1,
  borderRadius:15,
  padding: 10,
},
form:{
  marginVertical:20
},
button:{
  borderRadius:15,
  height: 70,
  width:'auto',
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