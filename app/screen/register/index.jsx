import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert,
    ImageBackground
  } from 'react-native';
  import React from 'react'
  import { useSelector, useDispatch } from 'react-redux'
import { setEmail } from '../../store/reducer/registerReducer'
import { setPassword, resetRegisterData } from '../../store/reducer/registerReducer'
import ApiLib from "../../lib/ApiLib"

  const windowWidth = Dimensions.get('window').width;

  export default function RegisterScreen({ navigation }) {
    const [confirmPassword, setConfirmPassword] = useState(null)

    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()


    const [pasword, onChangePassword] = React.useState('')
    const [confirm_pasword, onConfirmPassword] = React.useState('')

    const onSubmitLogin = () => {
      try {
        if( register.email === null || register.email === ""){
          throw Error('Email is required')
      }
      if( register.password === null || register.password === ""){
        throw Error('password is required')
    }

    if( confirmPassword === null ||  confirmPassword === ""){
        throw Error('Confirm password is required')
    }

    if( confirmPassword !== register.password){
        throw Error(`Confirm password doesn't match`)
    }

    let message  = `Name : ${register.firstName}  ${register.sureName}\n`
    message += `Email : ${register.email} \n`
    message += `Gender : ${register.gender} \n`
    message += `Birth Date : ${register.birthDate} \n`

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
                    "database": "app-lp3i-mobile",
                    "collection": "users",
                    "document": register
                }
            )

            if(res.data?.insertedId){
                dispatch(resetRegisterData())
                navigation.navigate("Login")
            }
            
        }
    },
]);

       
      } catch (err) {
        Alert.alert('Error', err.message, [
          {
            text: 'OK', onPress: () => {
              console.log('ERR')
            }
          },
        ]);
      }

    }

    const onSubmitAccount = () => {
        navigation.navigate('Login')
    }

    return (
      <ScrollView>
        <View>
          <View style={{ width: windowWidth, height: 180 }}>
            <Text style={style.textLoginStyle}>Create</Text>
            <Text style={style.textLoginStyle2}>Account :)</Text>
          </View>
          <View>
          <View style={{ width: windowWidth, height: 70}}>
          <ImageBackground 
            source={ require('../../../assets/images/union2.png') } 
            resizeMode="cover"
            style={{width:windowWidth, height:650}}>
          </ImageBackground>
        </View>
        </View>
          <View style={style.container}>
            <Text style={style.textLabel}></Text>
            <TextInput
              style={style.textInputStyle}
              onChangeText={(value)=>dispatch(setEmail(value))}
              placeholder='Email'
              placeholderTextColor='gray'
              value={email} />

            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={(value)=>dispatch(setPassword(value))}
              placeholder='Password'
              placeholderTextColor='gray'
              value={pasword} />

            <Text style={[style.textLabel, { marginTop: 10 }]}></Text>
            <TextInput
              style={[style.textInputStyle]}
              onChangeText={(value)=>setConfirmPassword(value)}
              placeholder='Confirm Password'
              placeholderTextColor='gray'
              value={confirm_pasword} />

            <TouchableOpacity onPress={onSubmitLogin} style={style.buttonLogin}>
              <Text style={style.textSignin}>Sign Up</Text>
            </TouchableOpacity>

          </View>



          <View style={style.btnContainer}>

            </View>
        </View>
      </ScrollView>
    );
  }

  const style = StyleSheet.create({
    container: {
      padding: 20
    },
    textInputStyle: {
      height: 70,
      marginTop: 5,
      padding: 10,
      borderBottom: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    textForgot: {
      marginTop: 5,
      textAlign: 'right',
      padding:15,
      color:'#1F41BB',
      fontWeight:'bold'
    },
    textLoginStyle: {
      fontSize: 32,
      marginTop: 140,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft:30,  
      color:'#000000',

    },
    textSignin: {
      textAlign: "center",
      marginVertical: "auto",
      color: "white",
      flex: 1,
      fontSize: 25
    },
    buttonLogin: {
      backgroundColor: '#000000',
      height: 60,
      width: '50%',
      alignSelf: "center",
      borderRadius: 55,
      flexDirection: "row",
      marginTop:40
    },
    textLoginStyle2: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'left',
      width:240,
      marginLeft:30,
      alignSelf: 'left',
    },
    brandStyle: {
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textLabel: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',

    },
    btnContainer1:{
      marginRight:15
    },
    textContinueStyle: {
      textAlign: 'center',
      marginBottom: 70
    },
    textContinueStyle2: {
      textAlign: 'center',
      color: '#1F41BB',
      fontWeight: 'bold',
      marginBottom:5
    },
    containerBottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30
    }
  })
