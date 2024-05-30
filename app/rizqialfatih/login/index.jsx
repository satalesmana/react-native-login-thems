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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function LoginScreen({navigation}){

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

      navigation.navigate('Welcome')
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
  const onhandleRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <ScrollView>
        <View style={{windowWidth}}>
          <Image source={ require('../../../assets/images/Group3.png')}>
          </Image>
        </View>
        <View style={style.container}>
          <Text style={style.textLoginStyle2}></Text>
          <ImageBackground source={ require('../../../assets/images/Rectangles.png')}></ImageBackground>
          <Image source={ require('../../../assets/images/Smile.png')}
          style={{marginLeft:150, marginTop:-100}}
          />
                <View style={{borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                  <Icon name="email" size={20} color="#F8F8FF" style={{ flex: 1, padding: 15 }} />
                    <TextInput
                        style={{ width: '90%', padding: 15 }}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={{borderColor:'black',borderWidth:2, height: 50, flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30, borderRadius: 10 }}>
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
                        <Text style={{ marginVertical: 'auto', textAlign: 'center', fontSize: 20, color: 'white' }}>Next</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                        <Text>New Member?</Text>
                        <Text onPress={onhandleRegister} style={{marginLeft: 5, color: '#4D7881'}}>Register now</Text>
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
    marginBottom:200
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