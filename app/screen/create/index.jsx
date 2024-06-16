import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setemail,
  setname,
  setpass,
  setnim,
  setprodi,
  setphone,
  setkelas,
  resetRegisterData,
} from "../../store/reducer/registerReducer";
import React from "react";
import ApiLib from "../../lib/ApiLib";
import { MyButton, CustomeInput } from "../../component";
import { ICGoogle, ICFacebook, ICMacOs } from "../../../assets";

import { LinearGradient } from "expo-linear-gradient";
import { GB2, GB3, GB4, GB5, Key, Person, Email } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function CreateScreen({ navigation }) {
  const register = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const onNextInput = () => {
    setLoading(true);
    try {
      if (register.password === null || register.password === "") {
        throw Error("password is required");
      }
      let message = `Name :  ${register.name}\n`;
      message += `Email : ${register.email} \n`;
      message += `NIM : ${register.nim} \n`;
      message += `Phone : ${register.phone} \n`;
      message += `Prodi : ${register.prodi} \n`;
      message += `Kelas : ${register.kelas} \n`;

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
              database: "kelompok1",
              collection: "users",
              document: register,
            });

            if (res.data?.insertedId) {
              setLoading(false);
              dispatch(resetRegisterData());
              navigation.navigate("Login");
            }
          },
        },
      ]);
    } catch (err) {
      setLoading(false);
      Alert.alert("Error", err.message, [
        {
          text: "OK",
          onPress: () => {
            console.log("ERR");
          },
        },
      ]);
    }
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View>
        <View>
          <ImageBackground source={GB4} resizeMode="contain" style={style.img1}>
            <ImageBackground
              source={GB5}
              resizeMode="stretch"
              style={style.img2}
            />
          </ImageBackground>
        </View>

        <View style={style.view1}>
          <ImageBackground source={GB2} resizeMode="stretch" style={style.img3}>
            <ImageBackground
              source={GB3}
              resizeMode="stretch"
              style={style.img4}
            />
            <Text style={style.text1}>Get Started Free</Text>
            <Text style={style.text2}>Free Forever. No Credit Card Needed</Text>

            <View style={style.container}>
              <CustomeInput
                value={register.setemail}
                onChangeText={(value) => dispatch(setemail(value))}
                placeholder="Your Email"
                source={Email}
                label="Email"
              />

              <CustomeInput
                value={register.setname}
                onChangeText={(value) => dispatch(setname(value))}
                placeholder="Your name"
                source={Person}
                label="name"
              />
              <CustomeInput
                value={register.setnim}
                onChangeText={(value) => dispatch(setnim(value))}
                placeholder="Your nim"
                source={Person}
                label="NIM"
              />
              <CustomeInput
                value={register.setprodi}
                onChangeText={(value) => dispatch(setprodi(value))}
                placeholder="Your Prodi"
                source={Person}
                label="Prodi"
              />
              <CustomeInput
                value={register.setkelas}
                onChangeText={(value) => dispatch(setkelas(value))}
                placeholder="Your Class"
                source={Person}
                label="Kelas"
              />
              <CustomeInput
                value={register.setphone}
                onChangeText={(value) => dispatch(setphone(value))}
                placeholder="Your No phone"
                source={Person}
                label="No Phone"
              />

              <CustomeInput
                value={register.setpass}
                onChangeText={(value) => dispatch(setpass(value))}
                placeholder="Your Password"
                source={Key}
                label="password"
              />

              <LinearGradient
                style={style.view2}
                colors={["#9C3FE4", "#C65647"]}
                start={[0, 0]}
                end={[1, 1]}
                location={[0.25, 0.4, 1]}
              >
                <Text onPress={onNextInput} style={style.signUp}>
                  Sign Up
                </Text>
              </LinearGradient>

              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <LinearGradient
                  colors={["black", "#D9D9D9BF"]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={style.garis}
                />
                <Text style={style.textContinueStyle}>Or sign up with</Text>
                <LinearGradient
                  colors={["#D9D9D9BF", "black"]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={style.garis}
                />
              </View>
            </View>
            <View style={style.btnContainer}>
              <MyButton imgUrl={ICGoogle} />
              <MyButton imgUrl={ICMacOs} style={{ marginLeft: 20 }} />
              <MyButton imgUrl={ICFacebook} style={{ marginLeft: 20 }} />
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },

  name: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#64575766",
    borderStyle: "solid",
    borderRadius: 8,
    width: "85%",
    alignSelf: "center",
  },
  imgPerson: {
    flex: 1,
    marginVertical: "auto",
    marginLeft: 15,
  },
  inputan: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#64575766",
    borderStyle: "solid",
    borderRadius: 8,
    width: "85%",
    alignSelf: "center",
  },
  imgKey: {
    flex: 1,
    marginVertical: "auto",
    marginLeft: 15,
  },

  email: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#64575766",
    borderStyle: "solid",
    borderRadius: 8,
    width: "85%",
    alignSelf: "center",
  },
  imgEmail: {
    flex: 1,
    marginVertical: "auto",
    marginLeft: 15,
  },
  text2: {
    color: "#c7c7c7",
    textAlign: "center",
    fontSize: 15,
  },
  textInputStyle: {
    padding: 10,
    width: "88%",
    color: "white",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#c7c7c7",
    marginBottom: 10,
  },
  textLabelName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#c7c7c7",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 0,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    width: "70%",
    alignSelf: "center",
    marginTop: -70,
  },
  textContinueStyle: {
    marginVertical: "auto",
    textAlign: "center",
    color: "white",
    flex: 1,
    padding: 5,
  },
  garis: {
    flex: 1,
    height: 1,
    marginVertical: "auto",
  },
  signUp: {
    textAlign: "center",
    paddingTop: 15,
    color: "white",
    fontSize: 20,
  },
  img4: {
    width: windowWidth,
    height: 200,
    marginTop: 65,
  },
  img3: {
    width: windowWidth,
    height: 1200,
    marginTop: -105,
  },
  img1: {
    width: 338,
    height: 238,
    alignSelf: "flex-end",
    marginRight: -25,
  },
  img2: {
    width: windowWidth,
    height: 430,
    marginLeft: -125,
  },
  view1: {
    borderTopRightRadius: 25,
    width: windowWidth,
    borderTopLeftRadius: 25,
  },
  view2: {
    backgroundColor: "#9C3FE4",
    height: 60,
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
  },
  text1: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -115,
  },
});
