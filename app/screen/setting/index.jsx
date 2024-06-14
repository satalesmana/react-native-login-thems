import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
} from 'react-native'
// import { useSelector, useDispatch } from 'react-redux';
import { CustomeInput2, CustomePassword2 } from '../../component';
// import { clearAuth } from "../../store/reducer/authReducer";

export default function SettingScreen({ navigation }) {
    // const auth = useSelector((state)=> state.auth)    
    // const dispatch = useDispatch()

    const onLogout = () => {
        // dispatch(clearAuth())
        navigation.navigate('Login')
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ height: 15, backgroundColor: '#EEEEEE' }}></View>
            <View style={{ borderWidth: 0, flexDirection: 'row', margin: 20 }}>
                <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../../../assets/images/google.png')}></Image>
                {/* <Text>{auth.username}</Text> */}
                <View style={{ marginLeft: '5%' }}>
                    <Text style={{ fontSize: 25 }}>Username</Text>
                    <Text style={{ marginBottom: 10 }}>Email</Text>
                    <TouchableOpacity onPress={onLogout} style={{ backgroundColor: 'red', width: '135%', height: 30 }}>
                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginVertical: 'auto' }}>Log Out</Text>
                    </TouchableOpacity>
                    {/* <View>

                        <Button onPress={onLogout} title='Log Out' />
                    </View> */}
                </View>
            </View>
            <View style={{ height: 15, backgroundColor: '#EEEEEE' }}></View>
            <View>
                <Text style={{ marginLeft: '6%', marginTop: '3%' }}>Change Password</Text>
                <Text></Text>
                <CustomeInput2 label="Email Address" placeholder='Enter your email' />
                <CustomePassword2 label="New Pasword" placeholder='New Password' />
                <CustomePassword2 label="Confirm Password" placeholder="Confirm Password" />
            </View>

            <TouchableOpacity style={{ borderRadius: 25, width: '80%', height: 50, alignSelf: 'center', backgroundColor: 'red', marginTop: '4%', marginBottom: '5%'}}>
                <Text style={{fontSize:25, textAlign: 'center', marginVertical: 'auto', color: 'white'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    }
})