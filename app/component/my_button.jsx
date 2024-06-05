import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const MyButton = (props) => {
  return (
    <TouchableOpacity style={[style.Bebas, props.style]}>
      <Image source={props.imgUrl} style={style.gambar} />
      <Text style={{ marginLeft: 10, fontSize: 15, color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export const ButtonRed = ({label, onPress}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.buttonLogin}
    >
      <Text style={style.textSignUp}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Bebas: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    borderColor: "grey",
    borderStyle: 'solid',
    borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  gambar: {
    width: 40,
    height: 40,
  },
  buttonLogin: {
    marginTop: "7%",
    backgroundColor: "#F71B33",
    height: 56,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textSignUp: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 18,
    color: "white",
  },
});
