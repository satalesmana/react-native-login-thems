import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import { setData, clearData } from "../../store/reducer/usersReducer";
import ApiLib from "../../lib/ApiLib";
import PieChart from "react-native-pie-chart";
import { Button } from "react-native-paper";

export default function DashboardScreen({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const filter = useSelector((state) => state.users.formFilter);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const widthAndHeight = 60;
  const series = [321, 123];
  const sliceColor = ["purple", "white"];

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
        setFilteredData(res.data.documents); // Update filteredData initially
      } else {
        dispatch(clearData());
        setFilteredData([]); // Clear filteredData if no documents
      }
    } catch (err) {
      console.log(err);
    }
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

  const handleSearch = (text) => {
    setSearchQuery(text);
    const newData = data.filter((item) =>
      item.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Icon name="file" size={25} color="purple" style={styles.icon} />
      <View style={styles.itemRight}>
        <Text style={(styles.text, { fontWeight: "bold", fontSize: 16 })}>
          {item.firstName}
        </Text>
        <Text style={styles.text}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.moreIconContainer}>
        <Icon name="more-vertical" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <Icon name="bell" size={22} color="black" />
        <Image
          source={require("../../../assets/images/AI.png")}
          style={styles.avatar}
        />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={"black"}
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.75}
        />
        <View style={styles.chartTextContainer}>
          <Text style={styles.chartText}>20 Student Active</Text>
          <Text style={styles.chartText}>Total of Student</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>List of Mahasiswa</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 50,
          }}
        >
          <Button
            style={styles.button}
            onPress={() => console.log("Pressed")}
            icon="arrow-down"
          >
            Last modified
          </Button>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 50,
            width: 50,
            height: 35,
            justifyContent: "center", // Mengatur posisi ikon ke tengah secara vertikal
            alignItems: "center",
          }}
        >
          <Icon name="grid" size={20} color="black" />
        </View>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 15,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingVertical: 0,
  },
  chartContainer: {
    backgroundColor: "#E8E5EF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 15,
    marginBottom: 25,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  chartTextContainer: {
    marginLeft: 20,
  },
  chartText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "left",
    marginBottom: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  seeAllText: {
    fontWeight: "400",
    fontSize: 15,
    color: "purple",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginLeft: 15,
    marginBottom: 10,
  },
  button: {
    borderColor: "purple",
    color: "purple",
    width: 150,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  icon: {
    marginRight: 10,
  },
  itemRight: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  moreIconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  flatList: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
