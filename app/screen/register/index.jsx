import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";  
import { CustomeInput } from '../../components/input';
import { MyButton } from '../../components/my_button';

export default function RegisterInputFormScreen(){
    return(
        <ScrollView style={style.container}>
            <View style={{width: windowWidth, height:400}}>
            <Text style={style.textLoginStyle}>Register</Text>
            </View>

<View style={style.container}>
            <Text style={style.textLabel}>First Name</Text>
            <TextInput style={style.textInputStyle} onChangeText={onChangeName} placeholderTextColor='#c7c7c7'
            value={name1}/>

            <Text style={[style.textLabel, {marginLeft:20}]}>Last name</Text>
            <TextInput style={style.textInputStyle} onChangeText={onChangeName2} placeholderTextColor='#c7c7c7'
            value={name2}/>

            <Text style={[style.textLabel, {marginTop:20}]}>E-mail</Text>
            <TextInput style={style.textInputStyle} onChangeText={onChangeEmail} placeholderTextColor='#c7c7c7'
            value={email}/>
            <View>
            <Text style={[style.textLabel, {marginTop:20}]}>Password</Text>
            <TextInput style={[style.textInputStyle, {marginBottom:12}]} onChangeText={onChangePassword} placeholderTextColor ='#c7c7c7'
            value ={password}/>
            <Text>must contain 8 char.</Text>
            </View>
            <Text style={[style.textLabel, {marginTop:20}]}>Confirm Password</Text>
            <TextInput style={[style.textInputStyle, {marginBottom:12}]} placeholderTextColor ='#c7c7c7'
            value ={password}/>
            <View style={style.containerInput}>
                <CustomeInput label="First name"/>
                <CustomeInput label="Last name"/>
                <CustomeInput label="Passeord"/>
                <CustomeInput label="Confirm Password"/>
            </View>
</View>
            <MyButton title="Create Account"/>
            <View>
                <Text>By continuing, you agree to our </Text>
                <TouchableOpacity onPress={onTOS}> Term of Service</TouchableOpacity>
                <Text> And </Text>
                <TouchableOpacity onPress={onPolicy}>Privacy Policy</TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        padding:15
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    
})