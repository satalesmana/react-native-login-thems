
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { useState } from 'react'
import {
    MyButton
} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { setFirstName, setEmail, setPassword, resetRegisterData } from '../../store/reducer/registerReducer'
import { ICFacebook, ICGoogle, ICApple } from '../../../assets'
import ApiLib from "../../lib/ApiLib"

const windowWidth = Dimensions.get('window').width;

export default function RegisterInputScreen({ navigation }) {
    const [confirmPassword, setConfirmPassword] = useState(null)
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () => {
        try {
            if (register.firstName === null || register.firstName === "") {
                throw Error('First name is required')
            }
            if (register.email === null || register.email === "") {
                throw Error('Email is required')
            }
            if (register.password === null || register.password === "") {
                throw Error('password is required')
            }

            if (confirmPassword === null || confirmPassword === "") {
                throw Error('Confirm password is required')
            }

            let
                message = `Email : ${register.email} \n`
            message += `Nama : ${register.firstName} \n`
            message += `Password : ${register.password} \n`

            Alert.alert('Confirm Your Account?', message, [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                }, {
                    text: 'Submit', onPress: async () => {
                        const res = await ApiLib.post('/action/insertOne',
                            {
                                "dataSource": "Cluster0",
                                "database": "lp3i_app",
                                "collection": "users",
                                "document": register
                            }
                        )

                        if (res.data?.insertedId) {
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
    const onLoginAccount = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View>
                <View style={{ width: windowWidth, height: 200 }}>
                    <Text style={style.textLoginStyle}>Create Account</Text>
                    <Text style={style.textLoginStyle2}>Create an account so you can explore all the existing jobs</Text>
                </View>

                <View style={style.container}>
                    <Text style={style.textLabel}></Text>
                    <TextInput
                        style={style.textInputStyle}
                        onChangeText={(value) => dispatch(setFirstName(value))}
                        placeholder='Masukkan Nama'
                        placeholderTextColor='gray'
                        value={register.firstName} />

                    <Text style={style.textLabel}></Text>
                    <TextInput
                        style={style.textInputStyle}
                        onChangeText={(value) => dispatch(setEmail(value))}
                        placeholder='Email'
                        placeholderTextColor='gray'
                        value={register.email} />

                    <Text style={[style.textLabel]}></Text>
                    <TextInput
                        style={[style.textInputStyle]}
                        onChangeText={(value) => dispatch(setPassword(value))}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor='gray'
                        value={register.password} />

                    <Text style={[style.textLabel]}></Text>
                    <TextInput
                        style={[style.textInputStyle]}
                        onChangeText={(value) => setConfirmPassword(value)}
                        placeholder='Confirm Password'
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        value={confirmPassword} />

                    <TouchableOpacity onPress={onNextInput} style={style.buttonLogin}>
                        <Text style={style.textSignin}>Sign In</Text>
                    </TouchableOpacity>

                </View>

                <Text onPress={onLoginAccount} style={style.textContinueStyle}>
                    Already have an account
                </Text>
                <Text style={style.textContinueStyle2}>
                    Or continue with
                </Text>

                <View style={style.btnContainer}>
                    <View>
                        <MyButton style={style.btnContainer1}
                            imgUrl={ICGoogle} />
                    </View>
                    <View>
                        <MyButton style={style.btnContainer1}
                            imgUrl={ICFacebook} />
                    </View>
                    <View>
                        <MyButton style={style.btnContainer1}
                            imgUrl={ICApple} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    loadingText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10
    },
    textInputStyle: {
        height: 50,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    textForgot: {
        marginTop: 5,
        textAlign: 'right',
        padding: 15,
        color: '#1F41BB',
        fontWeight: 'bold'
    },
    textLoginStyle: {
        fontSize: 32,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1F41BB',

    },
    textSignin: {
        textAlign: "center",
        marginVertical: "auto",
        color: "white",
        flex: 1,
        fontSize: 18
    },
    buttonLogin: {
        backgroundColor: '#1F41BB',
        height: 50,
        width: '100%',
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 40,
        shadowColor: '#000',
        shadowOpacity: 8,
        shadowRadius: 4,
    },
    textLoginStyle2: {
        fontSize: 15,
        marginTop: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 240,
        alignSelf: 'center',
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
    btnContainer1: {
        marginRight: 15
    },
    textContinueStyle: {
        textAlign: 'center',
        marginBottom: 30
    },
    textContinueStyle2: {
        textAlign: 'center',
        color: '#1F41BB',
        fontWeight: 'bold',
        marginBottom: 5
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 30
    }
})