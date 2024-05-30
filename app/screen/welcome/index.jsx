import { View,Text,TextInput,StyleSheet,TouchableOpacity,ImageBackground,Dimensions,Image,ScrollView} from "react-native";
import React from 'react'
const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}){
    const onSubmitWelcome=()=>{
        navigation.navigate('Login')
    }
    return(
        <ScrollView>
            <View>
            {/* <View style={style.statusbarStyle}>
            <Image source={require('../../../assets/images/statusbar.png')}/>
            </View> */}
                <View style={{width:windowWidth,height:720}}>
                    <ImageBackground source={require('../../../assets/images/lingkaransatu.png')}
                    resizeMode="cover" 
                    style={{width:windowWidth,height:406,width:445,marginBottom:-37,marginVertical:-210}}>
                        <ImageBackground source={require('../../../assets/images/lingkarandua.png')}
                        style={{width:windowWidth,height:342,width:342,marginBottom:50,marginLeft:100}}>
                        </ImageBackground>

                        <View style={style.onlineStyle}>
                            <Image source={require('../../../assets/images/onlineshop.png')}/>
                        </View>
                    </ImageBackground>
                    <Text style={style.textExploreStyle}>Explore the app</Text>
                    <View style={style.loremStyle}>
                    <Text style={style.textLoremStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit nam earum odit quos illum quae, nulla officiis sed a cum repellat commodi, corrupti laudantium illo ab architecto molestiae aliquam?</Text>
                    </View>
                </View>
                <View style={{width : "80%", alignContent : "center",  alignSelf : "center", color:"black"}}>
                  <TouchableOpacity style={{backgroundColor :"#FFC600",padding:10}}
            onPress={() => navigation.navigate('Home')} >
            <Text style={{color : "black", alignSelf : "center"}}>Let's started</Text>
                    </TouchableOpacity>  
                </View>
                
            </View>
        </ScrollView>
    );
}

const style=StyleSheet.create({
    onlineStyle:{
        marginTop:-40,
        alignItems:'center',
        justifyContent:'center',
        marginRight:75
    },
    textExploreStyle:{
        fontSize:32,
        marginTop:350,
        fontWeight:'bold',
        textAlign:'center'
    },
    textLoremStyle:{
        fontSize:15,
        marginTop:10,
        textAlign:'center',
        marginBottom:10,
        
    },
    loremStyle:{
        width:300,
        justifyContent:'center',
        alignSelf:'center'
    },
   containesatu:{
    textAlign:'center',
   alignContent : "center",
   alignItems : "center",
   alignSelf:"center",
   width:"10%"
   }
})