import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../../store/reducer/authreducer";
import { MaterialIcons, Ionicons, Fontisto } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const windowWidth = Dimensions.get("window").width;

export default function ProfileScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(clearAuth());
    navigation.replace("Login");
  };
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth,
          marginLeft: "10%",
          borderWidth: 0,
          marginTop: "15%",
          marginBottom: "0%",
        }}
      >
        <View style={{ flex: 3 }}>
          <View
            style={{
              borderWidth: 3,
              width: 60,
              height: 60,
              borderRadius: 50,
              borderColor: "grey",
            }}
          >
            <Image
              style={{ width: 55, height: 55, borderRadius: 50 }}
              source={require("../../../assets/images/profile2.jpg")}
            ></Image>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 2 }}>
          <MaterialIcons
            name="search"
            style={{ marginVertical: "auto", color: "white" }}
            size={18}
            color="black"
          />
          <MaterialIcons
            name="notifications"
            style={{
              marginVertical: "auto",
              marginLeft: "15%",
              color: "white",
            }}
            size={18}
            color="black"
          />
        </View>
      </View>
      <View style={{ borderWidth: 0 }}>
        <Text style={{ fontSize: 33, marginLeft: "10%", color: "white" }}>
          {auth?.name}
        </Text>
        <Progress.Bar
          progress={0.3}
          width={300}
          height={12}
          marginTop={"2%"}
          borderRadius={20}
          color="#9747FF"
          marginLeft={"10%"}
        />
        <View style={{ flexDirection: "row", marginTop: "2%" }}>
          <Fontisto
            name="cloudy"
            style={{ marginVertical: "auto", marginLeft: "10%" }}
            size={15}
            color="grey"
          />
          <Text style={{ marginLeft: "3%", color: "grey" }}>{auth?.email}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          height: 620,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "white",
        }}
      >
        <View style={[style.data, { marginTop: "15%" }]}>
          <Ionicons
            name="document"
            style={{ marginVertical: "auto", marginLeft: "10%" }}
            size={20}
            color="#f2dafd"
          />
          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontWeight: "bold" }}>{auth?.nim}</Text>
            <Text style={{ color: "grey" }}>NIM</Text>
          </View>
        </View>
        <View style={style.data}>
          <Ionicons
            name="document"
            style={{ marginVertical: "auto", marginLeft: "10%" }}
            size={20}
            color="#f2dafd"
          />
          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontWeight: "bold" }}>{auth?.prodi}</Text>
            <Text style={{ color: "grey" }}>Program Study</Text>
          </View>
        </View>
        <View style={style.data}>
          <Ionicons
            name="document"
            style={{ marginVertical: "auto", marginLeft: "10%" }}
            size={20}
            color="#f2dafd"
          />
          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontWeight: "bold" }}>{auth?.kelas}</Text>
            <Text style={{ color: "grey" }}>Class Code</Text>
          </View>
        </View>
        <View style={style.data}>
          <Ionicons
            name="document"
            style={{ marginVertical: "auto", marginLeft: "10%" }}
            size={20}
            color="#f2dafd"
          />
          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontWeight: "bold" }}>{auth?.phone}</Text>
            <Text style={{ color: "grey" }}>Phone Number</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191819",
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    borderWidth: 0,
    // backgroundColor: '#FF8F8F'
  },
  data: {
    borderWidth: 0,
    flexDirection: "row",
    marginTop: "7%",
  },
});
