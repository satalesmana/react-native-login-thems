import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Welcome')
        }, 3000);
    },[navigation])

    return (
        <LinearGradient colors={['#F2FCFF', '#EDFBFF', '#EDFBFF']} 
            style={styles.linearGradient}>
            <View style={styles.textContainer}>
                <Text style={styles.textSpalash}>Kelompok 5</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    textContainer:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    textSpalash:{
        color:'#213BBD',
        fontSize:25,
        fontWeight:'bold'
    }
})