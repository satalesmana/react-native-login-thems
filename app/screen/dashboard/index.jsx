import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useEffect, useCallback, useState } from "react";
import { setData, clearData } from "../../store/reducer/usersReducer";
import ApiLib from "../../lib/ApiLib";
import { useSelector, useDispatch } from "react-redux";

export default function DashboardScreen({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const filter = useSelector((state) => state.users.formFilter);

  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await ApiLib.post("/action/find", {
        dataSource: "Cluster0",
        database: "uasghw",
        collection: "users",
        filter: filter,
      });

      if (res.data?.documents) {
        dispatch(setData(res.data.documents));
      } else {
        dispatch(clearData());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getInitial = (firstName) => {
    let name = "";

    if (firstName.length > 0) name += firstName.substring(0, 1);

    return name.toLocaleUpperCase();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.textItemLeft}>{getInitial(item.firstName)}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text>{item?.firstName}</Text>
        <Text>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  containerItem: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#dedede",
    backgroundColor: "white",
  },
  itemLeft: {
    flex: 1,
    paddingLeft: 20,
    textAlign: "center",
  },
  textItemLeft: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#dedede",
    width: 45,
    textAlign: "center",
    backgroundColor: "#1F59B6",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  itemRight: {
    flex: 4,
  },
});