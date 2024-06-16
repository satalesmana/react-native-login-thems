import { 
    View,
    Text,
    StyleSheet
} from 'react-native'


export default function MyProfileScreen(){
    return (
        <View style={StyleSheet.container}>
            <Text>My File</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})