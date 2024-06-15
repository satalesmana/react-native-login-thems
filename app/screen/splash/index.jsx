import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Welcome')
        }, 5000);
    },[navigation])

    return (
        <LinearGradient colors={['#0000FF', '#0000FF', '#0000FF']} 
            style={styles.linearGradient}>
            <View style={styles.textContainer}>
                <Text style={styles.textSpalash}>Kelompok 2</Text>
                <Text style={styles.textSpalash}>Rezky jayadi saputra</Text>
                <Text style={styles.textSpalash}>Zaky wisnu Prabowo</Text>
                <Text style={styles.textSpalash}>Muhammad fadilah faza</Text>
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
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})