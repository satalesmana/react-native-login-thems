import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ImageBackground, Dimensions, Image, Alert, ScrollView } from "react-native";
import { CustomeInput } from "../../components";
// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, resetSettingsData } from "../../store/reducer/settingsReducer";
import { clearAuth } from '../../store/reducer/authReducer'
import ApiLib from "../../lib/ApiLib";
import React, { useState } from "react";

const windowWidth = Dimensions.get('window').width;

export default function SettingsScreen({ navigation }) {
    const [confirmPassword, setConfirmPassword] = useState("");
    const state = useSelector((state) => state.settings.formInput)
    const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const onLogout=()=>{
    navigation.replace("Login")
    }
  const onSubmitPassword=()=>{
    try {
        if (state.email === null || state.email === "") {
            throw Error('Email is required')
        }
        if (state.password === null || state.password === "") {
            throw Error('password is required')
        }

        if (confirmPassword === null || confirmPassword === "") {
            throw Error('Confirm password is required')
        }

        let
        message = `Password : ${state.password} \n`

        Alert.alert('Confirm Your Account?', message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            }, 
            {
                text: 'Submit', onPress: async () => {
                    const res = await ApiLib.post('/action/updateOne',
                        {
                            "dataSource": "Cluster0",
                            "database": "lp3i_app",
                            "collection": "users",
                            "filter": { "email": state.email },
                            "update": {
                                "$set": {
                                    "password": state.password
                                }
                            }
                        }
                    )
                    //if (res.data?.updatedCount > 0) {
                        dispatch(clearAuth());
                        navigation.replace("Login");
                    //}


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

// height : 180, fontSize: 50, 0.5, 
    return (
        <ScrollView>
            <View>
                <View style={{ width: windowWidth }}>
                    <View style={[style.container, { marginVertical: 10, backgroundColor: "white", flexDirection: "row" }]}>
                        <Image
                            source={require('../../../assets/images/AI Avatars.png')}
                            style={{ width: 100, height: 100, marginLeft: -0.2 }}
                        />
                        <View style={{width:250,}}>
                            <Text style={{fontSize: 22, fontWeight:'bold' }}>{auth.firstName}</Text>
                            <Text style={{}}>{auth.email}</Text>
                            <TouchableOpacity style={{ backgroundColor: "#E4E7EB", padding: 5, marginTop:10, width:180 }}
                            onPress={onLogout} title='Log Out' >
                            <Text style={{ color: "black", alignSelf: "center"}}>LogOut</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={[style.container, {marginVertical: 10, backgroundColor: "white" }]}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 18}}>
                        Change Password
                    </Text>
                        <CustomeInput
                            onChangeText={(value => dispatch(setEmail(value)))} placeholder='Email' placeholderTextColor='#c7c7c7' label="Email Addres" />
                        <CustomeInput
                            onChangeText={(value => dispatch(setPassword(value)))} placeholder='New Password' placeholderTextColor='#c7c7c7' label="New Password" />
                        <CustomeInput
                            onChangeText={setConfirmPassword}value={confirmPassword} placeholder='Confirm Password' placeholderTextColor='#c7c7c7' label="Confirm Password" />
                    <TouchableOpacity style={{ backgroundColor: "#2F4EFF", padding: 15,borderRadius:25, marginTop:20}}
                           onPress={onSubmitPassword} title='Log Out'>
                            <Text style={{ color: "white", alignSelf: "center" }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
            
                    
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
 
    },
    MiniStyle: {
        marginTop: -20,
        marginBottom: 500,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    textExploreStyle: {
        fontSize: 32,
        marginTop: 400,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textLoremStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    containerdua: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 30

    }
})