import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({ navigation }) {
  const onSubmitAccount = () => {
    navigation.navigate("Login");
  };
  const onSubmitLoginRegis = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView>
      <View>
        <View style={{width: windowWidth, height: 400}}>
          <Image
            source={require("../../../assets/images/welcome1.png")}
            style={{marginLeft:100}}></Image>
        </View>
        {/* <View>
          <ImageBackground
            style={style.image2}
            source={require("../../../assets/images/maskgroup.png")}
          ></ImageBackground>
        </View> */}

        <View style={{ }}>
          <Text style={style.textLoginStyle}>Let’s Get
            </Text>
          <Text style={style.textLoginStyle}>Started</Text>
          <Text style={style.textLoginStyle2}>
            Grow Together
          </Text>
        </View>

        <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
            <Text style={[style.textSignin, { color: "white" }]}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    padding: 130,
    marginTop: 30,
    justifyContent: "center",
    resizeMode: "cover",
  },

  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
  },
  buttonLogin: {
    backgroundColor: "#000000",
    height: 40,
    width: "50%",
    borderRadius: 25,
    flexDirection: "row",
    marginRight: 10,
  },

  textSignin: {
    textAlign: "center",
    marginVertical: "auto",
    fontWeight: "regular",
    flex: 1,
  },
  signin: {
    width: "80%",
    height: 50,
    fontWeight: "bold",
    marginLeft:40,
    justifyContent:"center",
    alignItems:"center"
  },
  // Text
  textLoginStyle: {
    fontSize: 65,
    fontWeight: "bold",
    marginLeft:40,
  },
  textLoginStyle2: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft:40,
    marginBottom:20
  },
  //
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContinueStyle: {
    textAlign: "center",
    padding: 10,
  },
  containerBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
});
