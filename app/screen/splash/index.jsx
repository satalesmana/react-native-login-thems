import { View, StyleSheet, Image} from 'react-native';
import { useEffect } from 'react';
import { ICSpsc } from '../../../assets'


export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        }, 2000);
    },[navigation])

    return (
        <View style={styles.container}>
            <Image
                source={ICSpsc}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor : '#0D2063',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})