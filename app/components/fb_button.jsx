import { LinearGradient } from 'expo-linear-gradient';
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native'


export const FbButton=({title, onPress})=>{

    return(
        <TouchableOpacity  onPress={onPress}>
            <View style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      backgroundColor: '#dac0a3',
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 30,
      borderRadius: 30
    },
    buttonText: {
      fontSize: 20,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#000000',
      backgroundColor: 'transparent',
    },
  });