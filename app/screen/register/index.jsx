import { View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity, 
        Dimensions, 
        Alert} from "react-native";  
import { CustomeInput, MyButton2 } from '../../components';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setFirstName, 
        setSureName, 
        setEmail, 
        setPassword, 
        resetRegisterData} from '../../store/reducer/registerReducer'
import ApiLib from "../../lib/Apilib"

const windowWidth = Dimensions.get('window').width;
export default function RegisterInputFormScreen(navigation){
    const [confirmPassword, setConfirmPassword] = useState(null)
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onTOS=()=>{
        navigation.navigate("#")
    }
    const onPolicy=()=>{
        navigation.navigate("#")
    }

    const onNextInput = ()=>{
        try{
             if(register.firstName === null || register.firstName === ""){
                 throw Error('Harap masukkan nama awalan anda')
             }
             if(register.sureName === null || register.sureName === ""){
                 throw Error('Harap masukkan nama akhir anda')
             }
             if(register.email === null || register.email === ""){
                 throw Error('Harap masukkan email anda')
             }
             if(register.password === null || register.password === ""){
                 throw Error('Harap masukkan password anda')
             }
             if(confirmPassword === null || confirmPassword === ""){
                 throw Error('Harap masukkan password anda lagi')
             }
             if( confirmPassword !== register.password){
                throw Error(`Confirm password doesn't match`)
            }
            let message  = `Name : ${register.firstName}  ${register.sureName}\n`
                message += `Email : ${register.email} \n`

        Alert.alert('Confirm', message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },{
                text: 'Submit', onPress: async () => {
                   const res =  await ApiLib.post('/action/insertOne',
                        {
                            "dataSource": "Cluster0",
                            "database": "lp3i-mobile",
                            "collection": "users",
                            "document": register
                        }
                    )

                    if(res.data?.insertedId){
                        dispatch(resetRegisterData())
                        navigation.navigate("Menu")
                    }
                    
                }
            },
        ]);
        
    }catch(err){
        Alert.alert('Error', err.message, [
          {text: 'OK', onPress: () => {
            console.log('ERR')
          }},
        ]);    
    }
}
    return(
        <ScrollView>
            <View style={{width: windowWidth, height:400}}>
            <Text style={style.textHeader}>Register</Text>
            </View>

<View style={style.containerInput}>
    <View style={style.container2}>
        <CustomeInput value={register.firstName} onChangeText={(value)=> dispatch (setFirstName (value))}
        label="First Name"/>

        <CustomeInput value={register.sureName} onChangeText={(value)=> dispatch (setSureName (value))}
        label="Last Name"/>
    </View>

        <CustomeInput value={register.email} onChangeText={(value)=> dispatch (setEmail (value))}
        label="E-mail"/>
    
        <CustomeInput value={register.password} onChangeText={(value)=> dispatch (setPassword (value))}
        label="Password"/>
        <Text style={style.note}>must contain 8 char.</Text>

        <CustomeInput value={confirmPassword} onChangeText={(value)=> dispatch (setConfirmPassword (value))}
        label="Confirm Password"/>
</View>

<MyButton2 style={[{marginLeft:20, marginRight:20}]} onPress={onNextInput} text="Create Account"/>


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
    container2:{
        flexDirection:'row',
        justifyContent:'space-between'
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