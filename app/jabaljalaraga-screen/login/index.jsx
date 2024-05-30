import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView,} from 'react-native';

export default function LoginScreen({navigation}){
      const goHome=()=>{
        navigation.navigate("Home")
    }      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const windowWidth = Dimensions.get('window').width;


    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        navigation.replace("welcome")
    };

    return (
        <ScrollView>
        <View style={{ width: windowWidth }}>
            <View style={{ width: windowWidth, marginTop: 50, marginRight: 45 }}>
                <Image
                    source={require('../../../assets/images/Frame 1.png')}
                    style={{ alignSelf: 'flex-end' }}
                />
            </View>
            <View style={{ width: windowWidth }}>
                <View style={{ backgroundColor: '#FFFFFF', height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                    <TextInput
                        style={{ width: '90%', padding: 15,}}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Image source={require('../../../assets/images/mail.png')} style={{ flex: 1, padding: 15, marginTop: 10, marginRight: 15 }} />
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30, borderRadius: 10 }}>
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Image source={require('../../../assets/images/lock.png')} style={{ flex: 1, padding: 15, marginTop: 10,  marginRight: 15 }} />
                </View>
                



                <View style={{ width: '90%', flexDirection: 'row', marginHorizontal: 'auto', height: '50', padding: 10, marginTop: 10, marginBottom: '30%' }}>
                <Image source={require('../../../assets/images/Rectangle 6.png')}></Image>
                    <Text style={{ marginLeft: 10, flex: 8 }}>Remember me </Text>
                    <TouchableOpacity onPress={() => { }} style={{}}>
                        <Text style={{ color: '#FF3951' }}>Forget password?</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity onPress={goHome} style={{ width: '90%', alignSelf: 'center', height: 50, backgroundColor: '#FF3951', borderRadius: 10 }}>
                        <Text style={{ marginVertical: 'auto', textAlign: 'center', fontSize: 20, color: 'white' }}>Next</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
                        <Text>New Member?</Text>
                        <Text onPress={goHome} style={{marginLeft: 5, color: 'red'}}>Register now</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007bff',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    form: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center'
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rememberText: {
        marginLeft: 5,
        color: '#555',
    },
    forgotPassword: {
        color: '#007bff',
        textAlign: 'right',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    registerButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    registerText: {
        color: '#007bff',
    },
});