import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { food, pizza } from "../../../assets";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
  }, [navigation]);

  return (
    <ScrollView>
      <View style={{ width: windowWidth, height: windowHeight }}>
        <LinearGradient
          colors={["#FF1F3C", "#F8828F"]}
          start={[0, 0]}
          end={[1, 1]}
          location={[0.25, 0.4, 1]}
        >
          <View style={{ height: "70%" }}>
            <Image
              source={pizza}
              style={{ alignSelf: "center", marginTop: "50%" }}
            ></Image>
          </View>
          <Image source={food} style={{ alignSelf: "flex-end" }} />
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({});