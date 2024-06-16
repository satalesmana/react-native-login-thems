import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from 'react'
import { ICGoogle, ICFacebook } from "../../../assets";
import { CustomeInput, CustomePassword, ButtonRed } from "../../component";
import { setEmail, setPassword, setClass, setNim, setPhone, setProdi, setUsername, resetRegisterData } from "../../store/reducer/registerReducer";
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
    if (register.username === null || register.username === "") {
      alert('Username is required')
    }
    else if (register.email === null || register.email === "") {
      alert('Email is required')
    }
    else if (register.nim === null || register.nim === "") {
      alert('NIM is required')
    }
    else if (register.prodi === null || register.prodi === "") {
      alert('Program Studi is required')
    }
    else if (register.class === null || register.class === "") {
      alert('Kelas is required')
    }
    else if (register.phone === null || register.phone === "") {
      alert('Nomor HP is required')
    }
    else if (register.password === null || register.password === "") {
      alert('password is required')
    }

    else if (confirmPassword === null || confirmPassword === "") {
      alert('Confirm password is required')
    }

    else if (confirmPassword !== register.password) {
      alert(`Confirm password doesn't match`)
    }
    else if (register.password === confirmPassword) {
      let message = `Username : ${register.username} \n`
      message += `Email : ${register.email} \n`
      message += `NIM : ${register.nim} \n`
      message += `Program Studi : ${register.prodi} \n`
      message += `Kelas : ${register.class} \n`
      message += `Nomor HP : ${register.phone} \n`

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

      <CustomeInput
        label='Username'
        placeholder="Username"
        value={register.setUsername}
        onChangeText={(value) => dispatch(setUsername(value))} />

      <CustomeInput
        label='Email'
        placeholder="Email"
        value={register.setEmail}
        onChangeText={(value) => dispatch(setEmail(value))}
      />

      <CustomeInput
        label='NIM'
        placeholder="NIM"
        value={register.setNim}
        onChangeText={(value) => dispatch(setNim(value))}
      />

      <CustomeInput
        label='Program Studi'
        placeholder="Program Studi"
        value={register.setProdi}
        onChangeText={(value) => dispatch(setProdi(value))}
      />

      <CustomeInput
        label='Class'
        placeholder="Class"
        value={register.setClass}
        onChangeText={(value) => dispatch(setClass(value))}
      />

      <CustomeInput
        label='Phone Number'
        placeholder="Nomor HP"
        value={register.setPhone}
        onChangeText={(value) => dispatch(setPhone(value))}
      />

      <CustomePassword
        placeholder="Password"
        value={register.setPassword}
        onChangeText={(value) => dispatch(setPassword(value))}
      />
      
      <CustomePassword
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
      />

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
    fontSize: 17,
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
