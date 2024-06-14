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

export default function FilesScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();
  const onLogout = () => {
    dispath(clearAuth());
    navigation.replace("Login");
  };
  return (
    <View style={style.container}>
      <Text>{auth.id}</Text>
      <Text>{auth.firstName}</Text>
      <Button onPress={onLogout} title="Log Out" />
    </View>
    // <View style={style.container}>
    //     <Text>Profile</Text>
    // </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
