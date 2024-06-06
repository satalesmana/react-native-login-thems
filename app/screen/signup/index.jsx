import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {useState} from 'react'
import { ICGoogle, ICFacebook } from "../../../assets";
import { CustomeInput, CustomePassword, ButtonRed } from "../../component";
import { setEmail, setPassword, resetRegisterData } from "../../store/reducer/registerReducer";
import { useSelector, useDispatch } from 'react-redux'
import ApiLib from "../../lib/ApiLib"

export default function SignUpScreen({ navigation }) {
  const register = useSelector((state) => state.register.formInput)
  const dispatch = useDispatch()
  const [confirmPassword, setConfirmPassword] = useState(null)

  const goLogin = () => {

    navigation.navigate("Login");
    // alert("Daftar Bermasalah")
  };
  const goSignUp = () => {
    if (register.password === confirmPassword) {
      let message = `Email : ${register.email} \n`

      // Alert.alert('Confirm', message)
      Alert.alert('Confirm', message, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        }, {
          text: 'Submit', onPress: async () => {
            const res = await ApiLib.post('/action/insertOne',
              {
                "dataSource": "Cluster0",
                "database": "lp3i-mobile-app",
                "collection": "users",
                "document": register
              }
            )

            if (res.data?.insertedId) {
              dispatch(resetRegisterData())
              navigation.navigate("Login")
            }

          }
        },
      ]);

      // navigation.navigate("Login");

    }
    else {
      alert("Gagal")
    }
  };

  return (
    <ScrollView backgroundColor='white'>
      <Text style={style.header}>Sign Up</Text>

      <CustomeInput label='Email' placeholder="Email Address" value={register.setEmail} onChangeText={(value) => dispatch(setEmail(value))} />
      <CustomePassword placeholder="Password" value={register.setPassword} onChangeText={(value) => dispatch(setPassword(value))} />
      <CustomePassword placeholder="Confirm Password" value={confirmPassword} onChangeText={(value)=>setConfirmPassword(value)} />

      <ButtonRed onPress={goSignUp} label='Sign Up'></ButtonRed>

      <View style={style.viewAccount}>
        <Text style={{ fontSize: 15 }}>Have an account?</Text>
        <Text onPress={goLogin} style={style.textSignIn}>
          Sign In
        </Text>
      </View>

      <View style={style.viewOR}>
        <View style={style.garis} />
        <View>
          <Text style={style.textOR}>OR</Text>
        </View>
        <View style={style.garis} />
      </View>

      <TouchableOpacity style={style.btnFb}>
        <Image
          source={ICGoogle}
          style={{ marginLeft: "3%", marginVertical: "auto" }}
        ></Image>
        <Text style={style.textFG}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btnFb}>
        <Image
          source={ICFacebook}
          style={{ marginLeft: "4%", marginVertical: "auto" }}
        ></Image>
        <Text style={style.textFG}>Sign Up with Facebook</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  textFG: {
    flex: 8,
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 20,
    marginRight: "3%",
  },
  btnFb: {
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: "10%",
  },
  viewAccount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    height: 50,
  },
  textOR: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  garis: { flex: 1, height: 1, backgroundColor: "#DEDEDE" },
  viewOR: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    width: "90%",
    alignSelf: "center",
  },
  textSignIn: { color: "#EA4335", marginLeft: 5, fontSize: 15 },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "8%",
    marginBottom: '10%'
  }
});
