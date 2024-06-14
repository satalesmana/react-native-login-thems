import { View, Text, TextInput, StyleSheet, ScrollView, Alert, Dimensions, TouchableOpacity,  ActivityIndicator } from 'react-native';
import { MyButton, MyButton2 } from '../../components/my_button'
import { ICGoogle } from '../../../assets'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ApiLib from "../../lib/Apilib"

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState('')
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const toogleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmitLogin =async () => {
        setLoading(true)
        try {
            if (email.trim().length === 0) {
                throw Error('Harap masukkan email anda')
            }
            if (password.trim().length === 0) {
                throw Error('Harap masukkan password anda')
            }

            const res =  await ApiLib.post('/action/findOne',{
                "dataSource": "Cluster0",
                "database": "lp3i-mobile",
                "collection": "users",
                "filter": {
                  "email": email,
                  "password": password
                }
            }
        )
        setLoading(false)
      if(res.data.document != null){
        navigation.replace("Home")
      }else{
        Alert.alert('Error', "Username & password tidak sesuai", [
          {text: 'OK', onPress: () => {
            console.log('ERR')
          }},
        ]);
      }

            navigation.navigate('home')
        } catch (err) {
            setLoading(false)
            alert('Salah')
            // Alert.alert('Error', err.message, [
            //     {
            //         text: 'OK', onPress: () => {
            //             console.log('ERR')
            //         }
            //     },
            // ]);
        }
    }

    const onChangePass = () => {
        navigation.navigate("#")
    }

    if (loading) {
        return (
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }

    return (
        <ScrollView>
            <View>
                {/* <View style={{ width: windowWidth, height: 400 }}> */}
                <Text style={style.textLoginStyle}>Login</Text>
                <View style={style.container}>
                    <Text style={style.textLabel}>E-mail</Text>
                    <TextInput
                        style={style.textInputStyle}
                        onChangeText={onChangeEmail}
                        placeholder='Enter your email'
                        placeholderTextColor='#b8b8ba'
                        value={email} />

                    <Text style={[style.textLabel, { marginTop: 20, marginBottom: 10 }]}>Password</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                        <TextInput
                            style={[style.textInputStyle2]}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            placeholder='Enter your password'
                            placeholderTextColor='#b8b8ba'
                            value={password} />
                        <MaterialCommunityIcons
                            name={showPassword ? "eye-off" : "eye"}
                            size={25}
                            color="#aaa"
                            style={{ marginLeft: -40, marginTop: 15 }}
                            onPress={toogleShowPassword} />
                    </View>

                    <TouchableOpacity onPress={onChangePass}>
                        <Text style={[style.textLabel2]}>Forgot Password?</Text>
                    </TouchableOpacity>

                </View>

                <View style={{width:'90%', alignSelf:'center'}}>
                <MyButton2 onPress={onSubmitLogin} text="Login"></MyButton2>
                </View>

            </View>
            <View style={style.container2}>
                <Text style={style.textContinueStyle}>or login with</Text>
                <View>
                    <MyButton text="Login with Google" imgUrl={ICGoogle} />
                </View>
            </View>
            {/* </View> */}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20
    },
    container2: {
        padding: 20,
        marginTop: 230
    },
    textInputStyle: {
        height: 50,
        marginTop: 12,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#b8b8ba',
        padding: 10,
    },
    textInputStyle2: {
        height: 50,
        width: '100%',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#b8b8ba',
        padding: 10,
    },
    textLoginStyle: {
        fontSize: 32,
        marginTop: 100,
        fontWeight: 'bold',
        textAlign: 'center'
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
    textLabel2: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "right",
        color: "#4397f7",
        textDecorationLine: "underline",
        marginBottom: 70
    },
    textContinueStyle: {
        textAlign: 'center',
        color: "#8f8e8d",
        marginBottom: 20
    }
})