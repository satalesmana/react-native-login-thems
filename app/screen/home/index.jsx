
import {
  View,
  Text,
  Button,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import React from "react" 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {const [email, onChangeEmail] = React.useState("");
const [pass, onChangePassword] = React.useState("");

const onSubmitLogin = () => {
  // if (email == "shiddiq" && pass == shiddiq123) {
  //   alert("Sudah Benar");
  //   navigation.navigate("HomeScreen");
  // } else {
  //   alert("Salah");
  // }
  navigation.navigate('Login')

 
};

return (
  <ScrollView style={{ width: windowWidth, height: windowHeight, backgroundColor:'white'}}>
    <View style={{alignItems:'center'}}> 
    <Text style={{fontFamily: 'Outfit', fontWeight:'normal',marginBottom:20,fontSize:32,marginTop:140}}>Welcome to our app</Text>

      <View style={{}}>
        <Image
          source={require("../../../assets/images/draw.png")}
  
          style={{ width: 330, height: 200,marginBottom:80}}
        />
      </View>
<TouchableOpacity onPress={onSubmitLogin}
 style={{
  backgroundColor: 'rgba(11, 110, 254, 1)',
  
  borderRadius: 5,
  height:70,
  width:330,
  alignItems:'center',
  justifyContent:'center'
}}>
  <Text style={{fontFamily:('Outfit','Roboto'),fontWeight:'bold',color:'white',fontSize:20}}>Start</Text>
</TouchableOpacity>


    </View>
  </ScrollView>
);
  }
