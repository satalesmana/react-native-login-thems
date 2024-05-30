import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { useEffect } from 'react';
import { ICSpsc } from '../../../assets'


export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        }, 2000);
    },[navigation])

    return (
        <View style={{backgroundColor : '#0D2063'}}>
            <View style={styles.brandStyle}>
                <Image source={require("../../../assets/images/splash-sc.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    brandStyle: {
        marginTop: 250,
        marginBottom: 250,
        alignItems: "center",
        justifyContent: "center",
    }
})