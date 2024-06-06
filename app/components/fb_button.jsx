import { LinearGradient } from 'expo-linear-gradient';
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'


export const FbButton=({title, onPress})=>{

    return(
        <TouchableOpacity  onPress={onPress}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      marginLeft :45,
      marginTop : 30,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      width: 290
    },
    buttonText: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });