import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import { MyButton } from '../../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function LoginScreen({navigation}){

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');

  const windowWidth = Dimensions.get('window').width;
  const [checked, setChecked] = React.useState(false);

  const  onhandleLogin = () => {
    try {
      if (email.trim().length === 0) {
        throw Error('Email is required')
      }

      if (password.trim().length === 0) {
        throw Error('Password is required')
      }

      navigation.navigate('Login')
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
  const onhandleLogin1 = () => {
    navigation.navigate('Login')
  }

  return (
    <ScrollView>
        <View style={{windowWidth}}>
          <Image source={ require('../../../assets/images/Group2.png')}>
          </Image>
        </View>
        <View style={style.container}>
          <Text style={style.textLoginStyle2}></Text>
          <ImageBackground source={ require('../../../assets/images/Rectangles.png')}></ImageBackground>
          <Image source={ require('../../../assets/images/Laptop.png')}
          style={{marginLeft:150, marginTop:-100}}
          />
                <Text style={style.tittleEmail}>Email</Text>
                <View style={{ borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                  <Icon name="email" size={20} color="#F8F8FF" style={{ flex: 1, padding: 15 }} />
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <Text style={style.tittleEmail}>Phone No</Text>
                <View style={{borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center',borderRadius: 10 }}>
                  <Icon name="phone" size={20} color="#333" style={{ flex: 1, padding: 15 }} />
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="+66 666 66"
                        value={number}
                        onChangeText={setNumber}
                    />
                </View>
                <Text style={style.tittleEmail}>Password</Text>
                <View style={{borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                  <Icon name="lock" size={20} color="#F8F8FF" style={{ flex: 1, padding: 15 }} />
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Icon name="eye" size={10} color="#1C1C1C" style={{ flex: 1, padding: 20 }} />
                </View>
                <Text style={style.tittleEmail}>Password</Text>
                <View style={{borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center',borderRadius: 10 }}>
                  <Icon name="lock" size={20} color="#F8F8FF" style={{ flex: 1, padding: 15 }} />
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Icon name="eye" size={10} color="#1C1C1C" style={{ flex: 1, padding: 20 }} />
                </View>

                <View style={{ width: '90%', flexDirection: 'row', marginHorizontal: 'auto', height: '50', padding: 10, marginTop: 10, marginBottom: '10%' }}>  
                    <Text style={{ marginLeft: 10, flex: 8 }}>Remember me </Text>
                    <TouchableOpacity onPress={() => { }} style={{}}>
                        <Text style={{ color: '#4D7881' }}>Forget password?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={onhandleLogin} style={{ width: '90%', alignSelf: 'center', height: 50, backgroundColor: '#4D7881', borderRadius: 10, }}>
                        <Text style={{ marginVertical: 'auto', textAlign: 'center', fontSize: 15, color: 'white' }}>Create An Account</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                        <Text>Already have an Account !</Text>
                        <Text onPress={onhandleLogin1} style={{marginLeft: 5, color: '#4D7881'}}>Login</Text>
                    </View>
                </View>
      </View>
    </ScrollView>
  );
}


const style = StyleSheet.create({
  container: {
    padding:10,
  },
  textInputStyle: {
    height: "45",
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
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
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#1F41BB',
  
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
    height: 60,
    width: '100%',
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textLoginStyle2: {
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom:190,
    color:'white'
  },
  tittleEmail:{
    padding:15
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
    marginBottom: 50
  },
  textContinueStyle2: {
    textAlign: 'center',
    color: '#1F41BB',
    fontWeight: 'bold',
    marginBottom:5
  },
})