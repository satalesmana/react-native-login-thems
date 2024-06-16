import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer';
import ApiLib from "../../lib/ApiLib";
import { useSelector, useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress'
import React, { useState } from 'react';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data || []); // Handle empty data gracefully
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
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.textItemLeft}>{getInitial(item?.email)}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text>{item?.name}</Text>
        <Text>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (

    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'white',
          borderWidth: 3,
          borderColor: '#dedede'
        }}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder='search files'
        />
      </View>
      <View style={{ marginTop: '5%', height: 100, width: '85%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', marginBottom: '5%', backgroundColor: '#E8E5EF' }}>
        <View style={{ width: '25%', height: '60%', marginVertical: 'auto', marginLeft: '5%' }}>
          <Progress.Circle size={50} unfilledColor='white' thickness={7} strokeCap='round' indeterminate={false} progress={0.65} marginVertical={'auto'} alignSelf={'center'} borderWidth={0} color='#9322C8' />
        </View>

        <View style={{ marginVertical: 'auto', marginLeft: '5%' }}>
          <Text style={{ fontSize: 20 }}>Student Active</Text>
          <Text style={{ color: 'grey', fontSize: 13 }}>Total of student</Text>
        </View>

      </View>
      <Text style={{fontSize: 22,marginLeft:30,fontWeight: 'bold',}}>List Of Mahasiswa</Text>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={() => <Text>No users found.</Text>}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dedede',
    backgroundColor: 'white'
  },
  itemLeft: {
    flex: 1,
    paddingLeft: 20,
    textAlign: 'center'
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
    flex: 4
  }
})