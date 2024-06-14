import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth } from "../../store/reducer/authReducer";

export default function ProfileScreen({navigation}) {
    const auth = useSelector((state)=> state.auth)
    const dispatch = useDispatch()

    const onLogout=()=>{
        dispatch(clearAuth())
        navigation.replace('Login')
    }
    return (
        <View style={style.container}>
            <Text>{auth.id}</Text>
            <Text>{auth.email}</Text>

            <Button onPress={onLogout} title='Log Out' />
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center',
        borderWidth: 1
    }
})