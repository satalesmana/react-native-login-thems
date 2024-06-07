import { View, Text} from 'react-native';

export default function HomeScreen(){
    return(
        <View
        style={{ flex: 1, alignIems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={[{justifyContent:'center'}]}>Home Screen</Text>
        </View> 
    );
}