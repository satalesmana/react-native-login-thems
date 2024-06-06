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
} from "react-native";
import { MyButton } from "../../components"
import { GitHub, GitLab } from "../../../assets"
import React from "react"

const windowWidth = Dimensions.get("window").width;

export default function CreateScreen({ navigation }) {

  const gotologin = () => {
    navigation.navigate('Login')

  }

  return (
    <ScrollView>
      <View style={{ width: windowWidth, height: 380 }}>
        <Image resizeMode='cover' style={style.image}
          source={require('../../../assets/images/background.png')}>
        </Image>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold',textAlign:'center'}}>Hi, Welcome To AppName ! 👋</Text>
        <Text style={{ color: "#c7c7c7",textAlign:'center' }}>Hello again, you've been missed!</Text>
      </View>

      <View style={{ borderRadius: 20, width: '90%', alignSelf: 'center' }}>
        <Button onPress={gotologin} color="#4E0189" title="Next" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7', marginTop: 20 }} />
        <View>
          <Text style={{ textAlign: 'center', marginLeft: 15, marginRight: 15, color: "#c7c7c7", marginTop: 20 }}>Or With</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7', marginTop: 20 }} />
      </View>

      <View style={style.btnContainer}>
        <MyButton
          style={{ marginLeft: 20 }}
          text="GitHub"
          Image={GitHub} />

        <MyButton
          style={{ marginLeft: 20 }}
          text="GitLab"
          Image={GitLab} />
      </View>

      <View style={style.containerBottom}>
        <Text>Already have an account ? </Text>
        <Text onPress={gotologin} style={{ fontWeight: 'blue', color: '#4E0189' }}> Login </Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#c7c7c7"
  },
  textLoginStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -100
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: '#4E0189'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  },
  textContinueStyle: {
    textAlign: 'center',
    padding: 10
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
    marginTop: 100,
  },
  image: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  }
});