import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Alert,
  Dimensions
} from "react-native";
// import { MyButton } from "../../components";
// import { ICGoogle } from "../../../assets";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  return (
    <ScrollView>
      <View>
        <Image source={require('../../../assets/images/gambar.png')}></Image>
        <Text>Login Screen</Text>
      </View>
    </ScrollView>
  );
}


