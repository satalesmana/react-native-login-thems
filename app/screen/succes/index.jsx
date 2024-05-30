import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

  
  export default function SuccessScreen({ navigation }) {
  
    // const onSubmitContinue = () => {
    //   try {
    //     if (email.trim().length === 0) {
    //       throw Error('Email is required')
    //     }
  
    //     if (phone.trim().length === 0) {
    //         throw Error('Phone')
    //       }
  
    //     navigation.navigate('Verify')
    //   } catch (err) {
    //     Alert.alert('Error', err.message, [
    //       {
    //         text: 'OK', onPress: () => {
    //           console.log('ERR')
    //         }
    //       },
    //     ]);
    //   }
    // }
    const onSubmitContinue = () => {
      navigation.navigate('Home')
    }



  return (
    <View style={style.container}>
    <View style={style.container2}>
      <View style={style.imagecontainer}>
        <Image
          source={require("../../../assets/images/Image.png")}
          style={style.image}>
        </Image>
      <Text style={style.tittle}>Success!</Text>
      <Text style={style.subtittle}>Congratulations! You have been successfully authenticated</Text>
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
);
};
  
const style = StyleSheet.create({
  container: {
    flex:1,
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
    marginVertical: 30
    
    // resizeMode:'cover'
  },
tittle:{
  marginVertical: 20,
  fontSize:25,
  fontWeight:'bold',
  alignSelf:'center'
},
subtittle:{
  fontSize:20,
  textAlign:'center',
  marginBottom:50
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