import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer';
import ApiLib from "../../lib/ApiLib";
import { useSelector, useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data || []);
  const filter = useSelector((state) => state.users.formFilter);
  const [value, onChangeText] = useState('');

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
    if (!email) return '';
    return email.charAt(0).toUpperCase();
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const filteredData = useMemo(() => {
    if (!value) return data;
    const lowercasedValue = value.toLowerCase();
    return data.filter(item => {
      const nama = item.nama ? item.nama.toLowerCase() : '';
      const email = item.email ? item.email.toLowerCase() : '';
      return nama.includes(lowercasedValue) || email.includes(lowercasedValue);
    });
  }, [value, data]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.textItemLeft}>{getInitial(item?.email)}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text>{item?.nama}</Text>
        <Text>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder='Search users'
          style={styles.searchInput}
        />
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
          <Progress.Circle
            size={50}
            unfilledColor='white'
            thickness={7}
            strokeCap='round'
            indeterminate={false}
            progress={0.65}
            alignSelf={'center'}
            borderWidth={0}
            color='#9322C8'
          />
        </View>
        <View style={styles.progressText}>
          <Text style={{ fontSize: 20 }}>Student Active</Text>
          <Text style={{ color: 'grey', fontSize: 13 }}>Total of student</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, marginLeft: 30, fontWeight: 'bold' }}>List Of Mahasiswa</Text>
        <Text style={{ fontSize: 15, textAlign: 'right', marginRight: 30, color: '#9322C8' }}>see all</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <Text>No users found.</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#dedede',
    margin: 10,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: '#dedede',
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 20
  },
  containerItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dedede',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 5
  },
  itemLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  textItemLeft: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#dedede',
    width: 45,
    textAlign: 'center',
    backgroundColor: '#9322C8',
    fontWeight: 'bold',
    color: '#e7e7e7',
    padding: 10
  },
  itemRight: {
    justifyContent: 'center',
  },
  progressContainer: {
    height: 100,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#E8E5EF',
    alignItems: 'center',
    padding: 10
  },
  progressCircle: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressText: {
    flex: 1,
    marginLeft: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
});