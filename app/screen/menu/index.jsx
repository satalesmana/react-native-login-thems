import { StyleSheet, View, Button, ScrollView, Dimensions, Image} from 'react-native';
import {ICgoogle, IMG} from '../../../assets'
import React from 'react'
import { MyButton } from '../../components/my_button';

const windowWidth = Dimensions.get('window').width;
export default function MenuScreen({navigation}){

const onLogin =()=>{
    navigation.navigate('Login')
    }
const onRegister =()=>{
    navigation.navigate('Register')
    }

return(
<ScrollView>
<View>
    <View>
        <View style={{width: windowWidth, height:200}}/>
        <Image source={require('../../../assets/images/Image.png')}></Image>
    </View>

<View style={style.btnContainer}>
    <Button style={{borderWidth:10}}onPress={onRegister}
    text="Register"/>
    <Button style={[color="#2e960e", {marginLeft:15}]}onPress={onLogin}
    text="Login"/>
    </View>

<View style={style.btnContainer}>
<MyButton title="Login with Google" ImageURL={ICgoogle}></MyButton>
</View>
</View>
</ScrollView>
);
}

const style= StyleSheet.create({
    container: {
        padding:20
    },
    brandStyle:{
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
        flex: 2
    },
    btnContainer:{
        flex:2,
        flexDirection:'row',
        padding:20,
        paddingRight:20,
        borderRadaius:15
    }

})