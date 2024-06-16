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
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../../store/reducer/authReducer";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen(){
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(clearAuth());
    navigation.replace("Login");
  };
    return (
      <View style={{
        backgroundColor: "#191819",
        flex: 1}}>
        <View
          style={{
            gap: 7,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../../../assets/images/AI Avatars.png")}
            style={{ width: 55, height: 55, borderRadius: 50 }}
          />
          <Icon
            name="search"
            size={20}
            color="white"
            style={{ marginLeft: "70%" }}
          />
          <Icon
            name="bell"
            size={20}
            color="white"
            style={{ marginLeft: "5%" }}
          />
          </View>
          <View style={{ padding: 5, marginLeft: 25}}>
          <Text style={{ color: "white", fontSize: 25,marginBottom: 10}}>
            {auth.firstName}
          </Text>
          <Image
            source={require("../../../assets/images/ProBar.png")}
          />
        </View>
        <View
          style={{
            gap: 10,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="cloud"
            size={15}
            color="white"
            style={{ marginLeft: 30,fontWeight: 100 }}
          />
          <Text style={{ fontWeight: 100, color: "white"}}>
            {auth.email}
          </Text>
        </View>
        <View style={{ height: "100%", paddingTop: 25 }}>
          <View style={style.container}>
            <View style={style.container2}>
            <View style={style.container3}>
            <Icon
                name="file"
                size={25}
                color="gray"
                />
                <View >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                  {auth.nim}
                </Text>
                <Text style={{ fontWeight: "200" }}>NIM</Text>
              </View>
                    </View>
            <View style={style.container3}>
            <Icon
                name="file"
                size={25}
                color="gray"
                />
                <View >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                  {auth.programStudy}
                </Text>
                <Text style={{ fontWeight: "200" }}>Program Study</Text>
              </View>
                    </View>
            <View style={style.container3}>
            <Icon
                name="file"
                size={25}
                color="gray"
                />
                <View >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                  {auth.kodeKelas}
                </Text>
                <Text style={{ fontWeight: "200" }}>Code Kelas</Text>
              </View>
                    </View>
            <View style={style.container3}>
            <Icon
                name="file"
                size={25}
                color="gray"
                />
                <View >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                  {auth.telp}
                </Text>
                <Text style={{ fontWeight: "200" }}>Nomor Telepon</Text>
              </View>
                    </View>
            
                </View>
          </View>
        </View>
    </View>
      );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
  },
  container2:{
    flexDirection: 'column',
    // gap:20,
    // alignItems: 'center',
    // padding:30,
    marginBottom:200
  },
  container3:{
    flexDirection: 'row',
    gap:10,
    alignItems: 'center',
    padding:10,
    marginHorizontal:20

  }
})