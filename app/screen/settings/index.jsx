import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ImageBackground, Dimensions, Image, Alert, ScrollView } from "react-native";
import { CustomeInput } from "../../components";
// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFirstname,setSurename,setEmail,setNumber,setPassword,setJurusan,setKode,setNim, resetSettngsData } from "../../store/reducer/settingsReducer";
import { clerAuth } from '../../store/reducer/authReducer'
import ApiLib from "../../lib/ApiLib";
import React, { useState } from "react";

const windowWidth = Dimensions.get('window').width;

export default function SettingsScreen({ navigation }) {
    // const [nama, onChangeNama] = React.useState('')
    // const [email, onChangeEmail] = React.useState('')
    // const [password, onChangePassword] = React.useState('') 

    const [confirmPassword, setConfirmPassword] = useState("");
    const settings = useSelector((state) => state.settings.formInput);
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const onLogout=()=>{
        dispatch(clerAuth())
        navigation.replace("Login")
    

        try {
            if (!settings.firstname) throw Error("Firstname is required");
            if (!settings.Surename) throw Error("Surename is required");
            if (!settings.email) throw Error("Email is required");
            if (!settings.number) throw Error("number is required");
            if (!settings.nim) throw Error("nim is required");
            if (!settings.jurusan) throw Error("jurusan is required");
            if (!settings.kode) throw Error("kode is required");
            if (!settings.password) throw Error("Password is required");
            if (settings.password===confirmPassword) throw Error("Confirm password doesn't match");

            const message = `Email : ${settings.email}\n
        Password : ${settings.password}\n`;

            Alert.alert("Confirm", message, [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Submit",
                    onPress: async () => {
                        const res = await ApiLib.post("/action/UpdateOne", {
                            dataSource: "AtlasCluster",
                            database: "uas",
                            collection: "users",
                            document: settings,
                        });
                        if (res.data?.insertedId) {
                            dispatch(resetSettingsData());
                            navigation.navigate("Login");
                        }
                    },
                },
            ]);
        } catch (err) {
            Alert.alert("Error", err.message, [{ text: "OK" }]);
        }
    };


    return (
        <ScrollView>
            <View>
                <View style={{ width: windowWidth }}>
                    <View style={[style.container, { borderWidth: 1, margin: 10, backgroundColor: "white", flexDirection: "row" }]}>
                        <Image
                            source={require('../../../assets/images/AI_Avatars.png')}
                            style={{ width: 100, height: 100, marginLeft: -0.2 }}
                        />
                        <View style={{alignItems:"center",width:240, marginLeft:-20}}>
                            <Text style={{fontWeight:"bold"}}>{auth.firstname}</Text>
                            <Text style={{}}>{auth.email}</Text>
                            <TouchableOpacity style={{ backgroundColor: "#8a2be2", padding: 10, width:100 }}
                            onPress={onLogout} title='Log Out' >
                            <Text style={{ color: "black", alignSelf: "center"  }}>LogOut</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={[style.container, { borderWidth: 1, margin: 10, backgroundColor: "white" }]}>
                        <CustomeInput
                            onChangeText={(value => dispatch(setEmail(value)))} placeholder='Email' placeholderTextColor='#c7c7c7' label="Email Addres" />
                     
                        <CustomeInput
                            onChangeText={(value => dispatch(setPassword(value)))} placeholder='New Password' placeholderTextColor='#c7c7c7' label="New Password" />
                        <CustomeInput
                            onChangeText={setConfirmPassword}value={confirmPassword} placeholder='Confirm Password' placeholderTextColor='#c7c7c7' label="Confirm Password" />
                   <TouchableOpacity style={{ backgroundColor: "blue", padding: 10,borderRadius:20}}
                           onPress={onLogout} title='Log Out'>
                            <Text style={{ color: "black", alignSelf: "center" ,color:"white"}}>Submit</Text>
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
        marginTop: 0
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