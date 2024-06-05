import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={style.ikbarpuanjito}>
        <Text>Ikbar puan jito</Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  ikbarpuanjito: {
    textalign: "center",
  },
});
