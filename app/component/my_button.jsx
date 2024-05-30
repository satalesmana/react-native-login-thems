import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const MyButton = (props) => {
  const onCreate = () => {
    navigation.navigate("Create");
  } ;
  return (
    <TouchableOpacity style={[style.Bebas, props.style]}>
      <Image onPress={onCreate}  style={style.gambar} source={props.imgUrl}></Image>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Bebas: {
    backgroundColor: "#64575766",
    alignItems: "center",
    borderColor: "grey",
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'center',
    borderRadius: 20,
    height: 60
  },
  gambar: {
    width: 30,
    height: 30,
    marginVertical: 'auto'
  }
});
