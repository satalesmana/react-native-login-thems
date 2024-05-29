import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const MyButton = (props) => {
  return (
    <TouchableOpacity style={[style.Bebas, props.style]}>
      <Image source={props.imgUrl} style={style.gambar} />
      <Text style={{marginLeft: 10, fontSize: 15, color: 'white'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Bebas: {
    // backgroundColor: "green",
    padding: 10,
    borderColor:'#e1e6ed',
    borderRadius:5,
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  gambar: {
    width: 30,
    height: 30,
  }
});
