import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { MyButton } from "../components";
import { ICGoogle } from "../../../assets";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setEmail,
  setPassword,
  resetRegisterData,
  setJurusan,
  setKode,
  setNumber,
  setNim
} from "../../store/reducer/registerReducer";
import ApiLib from "../../lib/Apilib";
import React, { useState } from "react";
const windowWidth = Dimensions.get("window").width;

export default function RegisterScreen({ navigation }) {
  // const [nama, onChangeNama] = React.useState('')
  // const [email, onChangeEmail] = React.useState('')
  // const [password, onChangePassword] = React.useState('')

  const [confirmPassword, setConfirmPassword] = useState("");
  const register = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const onNextInput = () => {
    try {
      if (!register.firstName) throw Error("Name is required");
      if (!register.nim) throw Error("Nim is required");
      if (!register.jurusan) throw Error("Jurusan is required");
      if (!register.kode) throw Error("Kode is required");
      if (!register.number) throw Error("Number is required");
      if (!register.email) throw Error("Email is required");
      if (!register.password) throw Error("Password is required");

      const message = `Name : ${register.firstName}\n
      Nim : ${register.nim}\n
      Jurusan : ${register.jurusan}\n
      Kode : ${register.kode}\n
      Number : ${register.number}\n
      Email : ${register.email}\n
      Password : ${register.password}\n`;

      Alert.alert("Confirm", message, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: async () => {
            const res = await ApiLib.post("/action/insertOne", {
              dataSource: "Cluster0",
              database: "lp3i-mobile",
              collection: "users",
              document: register,
            });
            if (res.data?.insertedId) {
              dispatch(resetRegisterData());
              navigation.navigate("Login");
            }
          },
        },
      ]);
    } catch (err) {
      Alert.alert("Error", err.message, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView>
      <View>

        <View>
          <Text
            style={[
              style.textRegisterStyle,
              {
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 20,
                marginLeft: 20,
              },
            ]}
          >
            Create New Account
          </Text>
          <View style={style.containtertiga}>
            <Text style={style.textLabel}>Nama</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setFirstName(value))}
              placeholder="Create your name"
              placeholderTextColor="#c7c7c7"
              value={register.setFirstName}
            />
            <Text style={style.textLabel}>Nim</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setNim(value))}
              placeholder="NIM"
              placeholderTextColor="#c7c7c7"
              value={register.setNim}
            />
            <Text style={style.textLabel}>Jurusan</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setJurusan(value))}
              placeholder="Jurusan"
              placeholderTextColor="#c7c7c7"
              value={register.setJurusan}
            />
            <Text style={style.textLabel}>Kode Kelas</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setKode(value))}
              placeholder="Kode"
              placeholderTextColor="#c7c7c7"
              value={register.setKode}
            />
            <Text style={style.textLabel}>Number</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setNumber(value))}
              placeholder="Create your name"
              placeholderTextColor="#c7c7c7"
              value={register.setNumber}
            />
            <Text style={style.textLabel}>Email Addres</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setEmail(value))}
              placeholder="Create your email"
              placeholderTextColor="#c7c7c7"
              value={register.setEmail}
            />
            <Text style={style.textLabel}>Password</Text>
            <TextInput
              style={[style.textInputStyle, { marginBottom: 12 }]}
              onChangeText={(value) => dispatch(setPassword(value))}
              placeholder="Create your password"
              placeholderTextColor="#c7c7c7"
              value={register.setPassword}
            />
          </View>

          <View style={style.containeempat}>
            <View>
              <Text>By Continuing,you agree to our</Text>
            </View>

            <View>
              <Text
                style={[
                  style.textTermStyle,
                  { marginLeft: 5, color: "blue", fontWeight: "bold" },
                ]}
              >
                terms of service
              </Text>
            </View>
          </View>

          <View style={style.signup}>
          <Button onPress={onNextInput} color="#0000FF" title="Sign up" />
          </View>


          
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              color: "grey",
            }}
          >
            ──────── Or Sign in with ────────
          </Text>
        </View>

        <View style={style.btnContainer}>
          <MyButton text="Continue with google" imgUrl={ICGoogle} />
        </View>

        <View style={style.containeempat}>
          <Text>All ready have an account?</Text>
          <Text
            style={[style.textTermStyle, { color: "blue", fontWeight: "bold" }]}
          >
            sign in
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containtertiga: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  containeempat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  buttonStyle: {
    borderRadius: 50,
    marginTop: 100,
    marginBottom: 200,
  },
  btnContainer: {
    marginTop: 20,
  },
  signup:{
    borderRadius: 5,
  },

});
