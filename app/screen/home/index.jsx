
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import { useEffect,useState, useCallback } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer'
import ApiLib from "../../lib/ApiLib"
import Icon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen(){
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const widthAndHeight = 60;
  const series = [321, 123];
  const sliceColor = ["green", "white"];

  const fetchData = async ()=>{
    try{
      const res = await ApiLib.post('/action/find',{
        "dataSource": "AtlasCluster",
        "database": "uas",
        "collection": "users",
        "filter": filter
      })

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


  useEffect(()=>{
    fetchData()
  },[])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);


  // 
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (data) {
      const newData = data.filter((item) => {
        if (item.firstname) {
          return item.firstname.toLowerCase().includes(text.toLowerCase());
        }
        return false;
      });
      setFilteredData(newData);
    }
  };
  const renderItem = ({ item }) => (
      <TouchableOpacity>
    <View style={styles.itemContainer}>
      <Icon name="file" size={25} color="gray" style={styles.icon} />
      <View style={styles.itemRight}>
        <Text style={(styles.text, { fontWeight: "bold", fontSize: 16 })}>
          {item.firstname}
        </Text>
        <Text style={styles.text}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.moreIconContainer}>
        <Icon name="more-vertical" size={20} color="black" />
      </TouchableOpacity>
    </View>
      </TouchableOpacity>
  );

  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={"black"}
          onChangeText={handleSearch}
          value={searchQuery}/>
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
      
      
      )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  containerItem:{
    flex:1,
    padding:10, 
    flexDirection:'row',
    borderBottomWidth: 1,
    backgroundColor:'white'
  },
  itemLeft:{
    flex:1,
    paddingLeft:20,
    textAlign:'center'
  },
  textItemLeft:{
    borderRadius:50,
    borderWidth:1,
    borderColor:'#dedede',
    width:45,
    textAlign:'center',
    backgroundColor:'red',
    fontWeight:'bold',
    color:'white',
    padding:10
  },
  itemRight:{
    flex:4
  },
  textList:{
    fontSize:25
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    // borderColor: '#dedede'
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16
  },
  searchButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
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
})