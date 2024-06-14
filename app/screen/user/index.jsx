import { 
    View,
    Text,
    StyleSheet
} from 'react-native'


export default function UserScreen(){
    return (
        <View style={StyleSheet.container}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})