import React, { useEffect, useCallback, useState } from 'react';
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
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { setData, clearData } from '../../store/reducer/usersReducer';
import ApiLib from '../../lib/ApiLib';

export default function DashboardScreen({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const filter = useSelector((state) => state.users.formFilter);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await ApiLib.post('/action/find', {
        dataSource: 'Cluster0',
        database: 'uasghw',
        collection: 'users',
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

  const getInitial = (firstName) => {
    let name = '';

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

  const handleSearch = (text) => {
    setSearchQuery(text);
    const newData = data.filter((item) =>
      item.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem}>
      {/* <View style={styles.itemLeft}>
        <Text style={styles.textItemLeft}>{getInitial(item.firstName)}</Text>
      </View> */}
      <View style={styles.itemRight}>
        <Text>{item.firstName}</Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          gap: 10,
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 5 }}>
          HOME
        </Text>
        <Icon
          name="bell"
          size={22}
          color="black"
          style={{ marginLeft: '60%' }}
        />
        <Image
          source={require('../../../assets/images/AI.png')}
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
            borderColor: 'black', // corrected prop name
            borderWidth: 1, // corrected prop name
          }}
        />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  },
  containerItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dedede',
    backgroundColor: 'white',
  },
  itemLeft: {
    flex: 1,
    paddingLeft: 20,
    textAlign: 'center',
  },
  textItemLeft: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#dedede',
    width: 45,
    textAlign: 'center',
    backgroundColor: '#1F59B6',
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  itemRight: {
    flex: 4,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
  },
});
