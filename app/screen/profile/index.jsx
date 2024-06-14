import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Alert,
  Button,
  ViewBase,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../../store/reducer/authReducer";
import * as Progress from "react-native-progress";

import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();
  const onLogout = () => {
    dispath(clearAuth());
    navigation.replace("Login");
  };

  return (
    <View
      style={{
        backgroundColor: "#0F0145",
        // backgroundColor: "red",
        flex: 1,
      }}
    >
      <View>
        <View
          style={{
            gap: 10,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../../../assets/images/AI.png")}
            style={{ width: 55, height: 55, borderRadius: 50 }}
          />
          <Icon
            name="search"
            size={22}
            color="white"
            style={{ marginLeft: "70%" }}
          />
          <Icon
            name="bell"
            size={22}
            color="white"
            style={{ marginLeft: "5%" }}
          />
        </View>
        <View style={{ padding: 5, marginLeft: 25, marginBottom: 20 }}>
          <Text style={{ color: "white", fontSize: 25, fontFamily: "Roboto" }}>
            GHW Team
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Progress.Bar
            progress={0.3}
            width={360}
            height={20}
            borderRadius={20}
            color="#9747FF"
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
            size={22}
            color="white"
            style={{ marginLeft: 30, marginTop: 10, fontWeight: 100 }}
          />
          <Text style={{ fontWeight: 100, color: "white", marginTop: 10 }}>
            biesyntia@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ height: "100%", paddingTop: 10 }}>
        {/* <Text>halo</Text> */}
        <View style={style.container}>
          <View style={{ height: 700 }}>
            <View
              style={{
                gap: 10,
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Icon
                name="file"
                size={25}
                color="purple"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  220444020028
                </Text>
                <Text style={{ fontWeight: "200" }}>NIM</Text>
              </View>
            </View>
            <View
              style={{
                gap: 10,
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Icon
                name="file"
                size={25}
                color="purple"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  Manajement Informatika
                </Text>
                <Text style={{ fontWeight: "200" }}>Program Study</Text>
              </View>
            </View>
            <View
              style={{
                gap: 10,
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Icon
                name="file"
                size={25}
                color="purple"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  MI-22-21
                </Text>
                <Text style={{ fontWeight: "200" }}>Class Code</Text>
              </View>
            </View>
            <View
              style={{
                gap: 10,
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Icon
                name="file"
                size={25}
                color="purple"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  0812-9101-4737
                </Text>
                <Text style={{ fontWeight: "200" }}>Phone Number</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* <View style={style.viewButton}>
        <Text>{auth.id}</Text>
        <Text>{auth.firstName}</Text>
        <Pressable style={style.buttonLogOut} onPress={onLogout}>
          <Text style={style.text}>Log Out</Text>
        </Pressable>
      </View> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: "10%",
    // height: 700,
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
  },
  profileText: {
    color: "#1F59B6",
  },
  title: {
    textAlign: "left",
    paddingLeft: 25,
    paddingRight: 25,
  },
  viewButton: {
    alignItems: "center",
    paddingTop: "50%",
  },
  buttonLogOut: {
    borderRadius: 10,
    backgroundColor: "#1F59B6",
    paddingVertical: 5,
    paddingHorizontal: 25,
    elevation: 3,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
