import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../../store/reducer/authReducer";
import * as Progress from "react-native-progress";

import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(clearAuth());
    navigation.replace("Login");
  };

  return (
    <View
      style={{
        backgroundColor: "#0D2063",
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
            {auth.firstName} {auth.lastName}
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
            {auth.email}
          </Text>
        </View>
      </View>
      <View style={{ height: "100%", paddingTop: 10 }}>
        {/* <Text>halo</Text> */}
        <View style={style.container}>
          <View style={{ height: 800 ,padding:25}}>
            <View
              style={{
                gap: 10,
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                padding: 24,
              }}
            >
              <Icon
                name="file"
                size={25}
                color="blue"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  {auth.nim}
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
                color="blue"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {auth.prodi}
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
                color="blue"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {auth.classCode}
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
                color="blue"
                style={{ marginLeft: "0%" }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {auth.noTelp}
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