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
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../../store/reducer/authReducer";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();
  const onLogout = () => {
    dispath(clearAuth());
    navigation.replace("Login");
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.profileText}>Detail Profile</Text>
      </View>
      <View>
        <Text style={style.title}>
          Here's your profile and make sure to always check your identity,
          change your password if it's needed, thank you.
        </Text>
      </View>
      <View style={style.viewButton}>
        <Text>{auth.id}</Text>
        <Text>{auth.firstName}</Text>
        <Pressable style={style.buttonLogOut} onPress={onLogout}>
          <Text style={style.text}>Log Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
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