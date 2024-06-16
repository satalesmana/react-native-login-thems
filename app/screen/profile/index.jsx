import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
//   import { clearAuth } from "../../store/reducer/authreducer";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { IconDocument } from "../../component";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfileScreen({ navigation }) {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // const onLogout = () => {
    //   dispatch(clearAuth());
    //   navigation.replace("Login");
    // };
    return (
        <View style={style.container}>
            <View style={style.containerBox}>

                <View style={{ flex: 3 }}>
                    <View style={style.borderImg}>
                        <Image
                            style={{ width: 70, height: 70 }}
                            source={require("../../../assets/images/flat-color-icons_google.png")}
                        ></Image>
                    </View>
                </View>

                <View style={{ flexDirection: "row", flex: 2, marginVertical: 'auto' }}>
                    <MaterialIcons
                        name="search"
                        style={{ color: "white" }}
                        size={30}
                        color="black"
                    />
                    <MaterialIcons
                        name="notifications"
                        style={{
                            marginLeft: "15%",
                            color: "white",
                        }}
                        size={30}
                        color="black"
                    />
                </View>
            </View>
            <View style={{ marginBottom: "10%" }}>
                <Text style={style.user}>{auth?.username}</Text>
                <Progress.Bar
                    progress={0.6}
                    width={300}
                    height={15}
                    borderRadius={20}
                    color="red"
                    marginLeft={"10%"}
                />
                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                    <Fontisto
                        name="cloudy"
                        style={{ marginVertical: "auto", marginLeft: "10%" }}
                        size={25}
                        color="grey"
                    />
                    <Text style={style.email}>{auth?.email}</Text>
                </View>
            </View>

            <View style={style.containerWhite}>
                <View style={[style.data, { marginTop: "15%" }]}>
                    <IconDocument />
                    <View style={{ marginLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>{auth?.nim}</Text>
                        <Text style={{ color: "grey" }}>NIM</Text>
                    </View>
                </View>

                <View style={style.data}>
                    <IconDocument />
                    <View style={{ marginLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>{auth?.prodi}</Text>
                        <Text style={{ color: "grey" }}>Program Study</Text>
                    </View>
                </View>

                <View style={style.data}>
                    <IconDocument />
                    <View style={{ marginLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>{auth?.class}</Text>
                        <Text style={{ color: "grey" }}>Class Code</Text>
                    </View>
                </View>

                <View style={style.data}>
                    <IconDocument />
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
        backgroundColor: "#1E293B",
    },
    containerBox: {
        flexDirection: "row",
        width: windowWidth,
        marginLeft: "10%",
        marginTop: "15%",
        marginBottom: "5%",
        // borderWidth: 1,
    },
    borderImg: {
        borderWidth: 3,
        width: 76,
        height: 76,
        borderRadius: 50,
        borderColor: "grey",
        // marginBottom: "15%",
        marginVertical: 'auto'
    },
    user: {
        fontSize: 33,
        marginLeft: "10%",
        color: "white",
    },
    data: {
        borderWidth: 0,
        flexDirection: "row",
        marginTop: "7%",
    },
    containerWhite: {
        marginTop: 15,
        borderWidth: 1,
        height: windowHeight,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
    },
    email: {
        marginLeft: "3%",
        color: "grey",
    },
});
