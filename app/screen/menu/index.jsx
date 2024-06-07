import { StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';
import {ICGoogle} from '../../../assets'
import React from 'react'
import { MyButton, MyButton2, MyButton3 } from '../../components/my_button';

const windowWidth = Dimensions.get('window').width;
export default function MenuScreen({navigation}){

const onLogin=()=>{
    navigation.navigate("login")
    }
const onRegister=()=>{
    navigation.navigate("register")
    }

return(
<ScrollView>
<View>
    <View>
        <View style={{width: windowWidth, height:200}}/>
        <Image style={{marginLeft:10}}source={require('../../../assets/images/Image.png')}></Image>
    </View>

    <View style={style.btnContainer}>
    <MyButton3 onPress={onRegister} text="Register"/>
    <MyButton2 style={[{marginLeft:10}]} onPress={onLogin} text="Login"/>
    </View>

<View style={style.btnContainer2}>
<MyButton text="Login with Google" imgUrl={ICGoogle}></MyButton>
</View>
</View>
</ScrollView>
);
}

const style= StyleSheet.create({
    container: {
        padding:20
    },
    btnContainer:{
        marginTop:180,
        flex:2,
        flexDirection:'row',
        padding:20,
        paddingRight:20,
        borderRadius:15
    },
    btnContainer2:{
        marginTop:-25,
        justifyContent:"center",
        flex:2,
        flexDirection:'row',
        padding:20,
        paddingRight:20,
        borderRadius:15,
    }
})