import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { MyButton } from "../../components";
import { GitHub ,GitLab } from "../../../assets"
import { setFirstname,setSurename,setEmail, setNumber, setNim,setJurusan,setKode,setPassword, resetRegisterData } from '../../store/reducer/registerReducer';
import { useSelector, useDispatch } from 'react-redux';
import ApiLib from "../../lib/ApiLib";

const windowWidth = Dimensions.get("window").width;

export default function CreateScreen({ navigation }) {
  const register = useSelector((state) => state.register.formInput)
  const dispatch = useDispatch()

  const onNextInput = () =>{
    try{
        
        if(register.email === null || register.email === "") {
            throw Error('Email is required')
        }
        if(register.jurusan === null || register.jurusan === "") {
          throw Error('jurusan is required')
        }
      if(register.nim === null || register.nim === "") {
        throw Error('nim is required')
        }
      if(register.kode === null || register.kode === "") {
      throw Error('kode is required')
        }
        if(register.number === null || register.number === "") {
            throw Error('password is required')
        }
        if(register.password === null || register.password === "")  {
            throw Error('password is required')
        }
        
        
        let message  = `Firstname : ${register.firstname} \n`
            message += `Surename : ${register.surename} \n`
            message += `Email : ${register.email} \n`
            message += `Number : ${register.number} \n`
            message += `kode : ${register.kode}\n`
            message += `jurusan : ${register.jurusan}\n`
            message += `nim : ${register.nim}\n`
            message += `password : ${register.password}\n` 

        Alert.alert('Confirm', message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },{
                text: 'Submit', onPress: async () => {
                    console.log(register)
                   const res =  await ApiLib.post('/action/insertOne',
                        {
                            "dataSource":"AtlasCluster",
                            "database": "ekireski",
                            "collection": "ekireski",
                            "document": register
                        }
                    )
                    console.log(res)
                    if(res.data?.insertedId){
                        dispatch(resetRegisterData())
                        navigation.navigate("Login")
                    }else{
                        
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
  const gotologin = () => {
    navigation.navigate('Login')

}
  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 100 }}>

            <Text style={style.textLoginStyle}>Create an Account !</Text>
            <Text style={{textAlign: 'center',color: "#c7c7c7"}}>Connect With Your Friends Today !</Text>
        </View>

        <View style={style.container}>
        <Text style={style.textLabel}>firstname Address</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setFirstname(value))}
            placeholder="Enter Your Firstname"
            placeholderTextColor="#c7c7c7"
            value={setEmail}
          />
           <Text style={style.textLabel}>surename Address</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setSurename(value))}
            placeholder="Enter Your Surename"
            placeholderTextColor="#c7c7c7"
            value={setEmail}
          />
          <Text style={style.textLabel}>Email Address</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setEmail(value))}
            placeholder="Enter Your Email"
            placeholderTextColor="#c7c7c7"
            value={setEmail}
          />
           <Text style={style.textLabel}>Nim </Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setNim(value))}
            placeholder="Enter Your Nim"
            placeholderTextColor="#c7c7c7"
            value={setNim}
          />
          <Text style={style.textLabel}>Jurusan </Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setJurusan(value))}
            placeholder="Enter Your Jurusan"
            placeholderTextColor="#c7c7c7"
            value={setJurusan}
          />
              <Text style={style.textLabel}>Kode </Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={(value) => dispatch(setKode(value))}
            placeholder="Enter Your Kode"
            placeholderTextColor="#c7c7c7"
            value={setKode}
          />
          <Text style={[style.textLabel, { marginTop: 15 }]}>Phone Number</Text>
          <TextInput
            style={[style.textInputStyle,]}
            onChangeText={(value) => dispatch(setNumber(value))}
            placeholder="Enter Your PhoneNumber"
            placeholderTextColor="#c7c7c7"
            value={setNumber}
          />

<Text style={[style.textLabel, { marginBottom:20,marginTop:15 }]}>Password</Text>
<Image source={require('../../../assets/images/mata.jpeg')} style={{marginBottom: -40,marginLeft:300,tintColor:"#c7c7c7"}}/>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 5 }]}
            onChangeText={(value) => dispatch(setPassword(value))}
            placeholder="Your Enter Your Password"
            placeholderTextColor="#c7c7c7"
            value={setPassword}
          />
          <View style={style.textForgot}>
          <Text style={{fontWeight:'bold', color:'black',marginRight: 70}}>Remember Me</Text>
          <Text style={{fontWeight:'bold', color:'red',marginLeft: 60}}>Forgot Password</Text>
        </View>
          <Button color="#4E0189" title="Sign Up" onPress={onNextInput}/>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7' }} />
            <View>
              <Text style={{ textAlign: 'center', marginLeft: 20, marginRight: 20, color: "#c7c7c7"}}>Or With</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7' }} />
          </View>

        <View style={style.btnContainer}>
          <MyButton
          style={{marginLeft:20}}
          text="GitHub"
          Image={GitHub}/>

          <MyButton
            style={{marginLeft:20}}
            text="GitLab"
            Image={GitLab}/>
        </View>

        <View style={style.containerBottom}>
          <Text>Already have an account ? </Text>
          <Text onPress={gotologin} style={{fontWeight:'blue', color:'#4E0189'}}> Login </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:"#c7c7c7"
  },
  textLoginStyle: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: 'center'
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color : '#4E0189'
  },
  btnContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:15,
    paddingRight:15,
    marginTop:15,
  },
  textContinueStyle:{
    textAlign:'center',
    padding:10
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30,
    marginTop:150
  },

  textForgot: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    marginBottom:20
  }

});