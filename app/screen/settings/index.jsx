import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CustomeInput2, CustomePassword2 } from "../../component";
import {
  setEmail,
  setPassword,
  resetSettingData,
} from "../../store/reducer/settingsreducer";
import { useState } from "react";
import ApiLib from "../../lib/ApiLib";
import { clearAuth } from "../../store/reducer/authreducer";

export default function SettingScreen({ navigation }) {
  const setting = useSelector((state) => state.setting.formSetting);
  const auth = useSelector((state) => state.auth);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(clearAuth());
    navigation.navigate("Login");
  };

  const goChangePass = () => {
    if (setting.email === null || setting.email === "") {
      alert("Please Insert Email");
    } else if (setting.pass === "" || setting.pass === null) {
      alert("Please Insert New Password");
    } else if (setting.pass === confirmPassword) {
      let message = `email  ${setting.email} \n`;
      message += `ID : ${auth.id} \n`;

      Alert.alert("Confirm", message, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: async () => {
            const res = await ApiLib.post("/action/updateOne", {
              dataSource: "Cluster0",
              database: "kelompok1",
              collection: "users",
              filter: {
                _id: { $oid: auth.id },
                email: setting.email,
                // "_id": coba
              },
              update: { $set: { pass: setting.pass } },
            });

            // if (res.data?.insertedId) {
            console.log(res.data?.modifiedCount);
            if (res.data?.modifiedCount > 0) {
              dispatch(resetSettingData());
              alert("Update Data Berhasil Silahkan Login Kembali");
              navigation.navigate("Login");
            }
          },
        },
      ]);
    } else {
      alert("Password & Confirm Password Doesn't Match");
    }
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ height: 15, backgroundColor: "#EEEEEE" }}></View>
      <View style={style.containerSearch}>
        <Image
          style={style.img}
          source={require("../../../assets/images/profile2.jpg")}
        ></Image>
        {/* <Text>{auth.username}</Text> */}
        <View style={{ marginLeft: "5%" }}>
          <Text style={{ fontSize: 25 }}>{auth.name}</Text>
          <Text style={{ marginBottom: 10 }}>{auth.email}</Text>
          <TouchableOpacity onPress={onLogout} style={style.btnLogout}>
            <Text style={style.textLogout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 15, backgroundColor: "#EEEEEE" }}></View>
      <View>
        <Text
          style={{ marginLeft: "6%", marginTop: "3%", marginBottom: "10%" }}
        >
          Change Password
        </Text>
        <CustomeInput2
          label="Email Address"
          placeholder="Enter your email"
          value={setting.setEmail}
          onChangeText={(value) => dispatch(setEmail(value))}
        />
        <CustomePassword2
          label="New Pasword"
          placeholder="New Password"
          value={setting.setPassword}
          onChangeText={(value) => dispatch(setPassword(value))}
        />
        <CustomePassword2
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />
      </View>

      <TouchableOpacity onPress={goChangePass} style={style.btnSubmit}>
        <Text style={style.textSubmit}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    margin: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  btnLogout: {
    backgroundColor: "purple",
    width: "135%",
    height: 30,
    borderRadius: 5,
  },
  textLogout: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: "auto",
  },
  btnSubmit: {
    borderRadius: 25,
    width: "80%",
    height: 45,
    alignSelf: "center",
    backgroundColor: "purple",
    marginTop: "4%",
    marginBottom: "5%",
  },
  textSubmit: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: "auto",
    color: "white",
  },
});
