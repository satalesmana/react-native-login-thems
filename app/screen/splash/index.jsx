import { StyleSheet,View, Image, Text } from 'react-native';
import { useEffect} from 'react';

export default function SplashScreen({navigation}){
  useEffect(()=>{
    setTimeout(()=>{
    navigation.replace('Login')}, 5000);
    },
    [navigation]
)

    return (
        <View style = {styles.uixStyle}>
          <Image source={require('../../../assets/images/uix.png')}/>
    <Text style={styles.Copyright}>@2022 NINTREA.LIVE</Text>
</View>
    );
}
/*return (
    <View 
    style={{ flex:1, alignItems: 'center', justifyContent: ' center'}}>
    <Text>Splash Screen</Text>
    </View>
);
}*/
const styles = StyleSheet.create({
    uixStyle:{
      marginTop:40,
      alignItems:'center',
      justifyContent:'center',
      flex:2
    },
    Copyright:{
        color:'#c7c7c7',
        fontSize:17,
        textAlignVertical:'bottom',
        marginTop:15,
        flex:3

    }
  })