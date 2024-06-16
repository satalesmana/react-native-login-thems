import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer';
import ApiLib from "../../lib/ApiLib";
import { useSelector, useDispatch } from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data || []); // Handle empty data gracefully
  const filter = useSelector((state) => state.users.formFilter);

  const fetchData = async () => {
    try {
      const res = await ApiLib.post('/action/find', {
        "dataSource": "Cluster0",
        "database": "UAS",
        "collection": "users",
        "filter": filter,
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

  const getInitial = (email) => {
    if (!email) return ''; // Handle cases where email might be null or undefined
    return email.charAt(0).toUpperCase(); // Use charAt() for better compatibility
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.textItemLeft}>{getInitial(item?.email)}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text>{item?.username}</Text>
        <Text>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        // Add an empty component to handle cases where data is empty
        ListEmptyComponent={() => <Text>No users found.</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerItem:{
    flex:1,
    padding:10,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor:'#dedede',
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
    backgroundColor:'#9322C8',
    fontWeight:'bold',
    color:'#e7e7e7',
    padding:10
  },
  itemRight:{
 flex:4}
})