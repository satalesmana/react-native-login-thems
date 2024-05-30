import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";


export const MyButton = (props) => {
  const onSubmitLogin = () => {
    navigation.navigate("Home");
  } ;
  return (
    <TouchableOpacity style={[style.Bebas, props.style]}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Bebas: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    borderColor: "grey",
    borderStyle: 'solid',
    borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  gambar: {
    width: 40,
    height: 40,
  }
});
