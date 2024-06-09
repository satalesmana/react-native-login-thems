import { LinearGradient } from 'expo-linear-gradient';
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native'

const ContentItem = ({loading, title})=>{
    if(loading){
        return(
            <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                <ActivityIndicator size='small' color="white" />
                <Text style={styles.buttonText}> Loading...</Text>
            </View>
        )
    }

    if(!loading){
        return(<Text style={styles.buttonText}> {title} </Text>)
    }
}


export const LrsButton=({loading, title, onPress, style})=>{

    return(
        <TouchableOpacity disabled={loading} style={style} onPress={onPress}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
                style={styles.linearGradient}>
                    <ContentItem loading={loading} title={title} />
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
      borderRadius: 10,
      width: 320
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });