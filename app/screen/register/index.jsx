import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from "react-native";  
import { CustomeInput } from '../../components/input';
import { MyButton2 } from '../../components/my_button';
import React from 'react'

const windowWidth = Dimensions.get('window').width;
export default function RegisterInputFormScreen(){

    const onTOS=()=>{
        navigation.navigate("#")
    }
    const onPolicy=()=>{
        navigation.navigate("#")
    }

    return(
        <ScrollView>
            <View style={{width: windowWidth, height:400}}>
            <Text style={style.textHeader}>Register</Text>
            </View>

<View style={style.containerInput}>
    <CustomeInput label="First Name"/>
    <CustomeInput style={[{marginLeft:20}]} label="Last Name"/>
    <CustomeInput label="E-mail"/>
    <CustomeInput label="Password"/> <Text style={style.note}>must contain 8 char.</Text>
    <CustomeInput label="Confirm Password"/>
</View>
    <MyButton2 style={[{marginLeft:20, marginRight:20}]}text="Create Account"/>

    <Text style={style.terms}>By continuing, you agree to our&nbsp;
        <TouchableOpacity style={[style.textLabel2]} onPress={onTOS}><Text>Term of Service</Text></TouchableOpacity>
        &nbsp;And&nbsp; 
        <TouchableOpacity style={[style.textLabel2]} onPress={onPolicy}><Text>Privacy Policy</Text></TouchableOpacity>
    </Text>
</ScrollView>
    )
}

const style = StyleSheet.create({
    textHeader:{
        fontSize:32,
        marginTop:100,
        fontWeight:'bold',
        textAlign:'center'
    },
    containerInput:{
        marginTop: -200,
        marginBottom:20,
        padding:20
    },
    note:{
        color:"#929694"
    },
    textLabel2:{
        fontSize:12,
        fontWeight:'bold',
        color:"#4397f7",
        textDecorationLine:"underline"
    },
    terms:{
        padding:20,
        textAlign:"center"
    } 
})