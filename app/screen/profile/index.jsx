// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button
// } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import { clerAuth } from '../../store/reducer/authReducer'

// export default function ProfileScreen({navigation}){
//     const auth = useSelector((state) => state.auth)
//     const dispatch = useDispatch()

//     const onLogout=()=>{
//         dispatch(clerAuth())
//         navigation.replace("Login")
//     }

//     return (
//         <View style={styles.container}>
//             {/* <Text>{auth.id}</Text> */}
//             <Text>{auth.firstName}</Text>

//             <Button onPress={onLogout} title='Log Out'/>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{ 
//         flex: 1, 
//         justifyContent: 'center',
//         alignItems: 'center' 
//     }
// })
import { View, Text } from 'react-native';

export default function ProfileScreen(){
    return (
        <View 
          style={{ flex: 1, alignItems: 'center', 
              justifyContent: 'center' 
              }}>
          <Text>Home Screen</Text>
        </View>
      );
}