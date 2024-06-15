import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';
import { useState, useEffect } from "react";
import { setData, clearData, countData } from '../../store/reducer/usersReducer';
import ApiLib from '../../lib/Apilib'
import { useSelector, useDispatch } from 'react-redux';
import { Octicons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import * as React from 'react';

export default function HomeScreen() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)
  const [search, onChangeSearch] = React.useState('')


  const fetchData = async () => {
    try {
      const res = await ApiLib.post('action/find', {
        "dataSource": "Cluster0",
        "database": "lp3i-mobile",
        "collection": "users",
        "filter": filter
      })

      if (res.data?.documents) {
        // console.log(res.data.documents.length);
        dispatch(setData(res.data.documents))
      } else {
        dispatch(clearData())
      }

    } catch (err) {
      console.log(err);
    }
  }
  // const count = coba1;



  useEffect(() => {
    fetchData()
  }, [])

  const rederItem = ({ item }) => (
    <TouchableOpacity style={style.containerItem}>
      <View style={style.itemLeft}>
        {/* <Text style={style.textItemLeft}>{getInitial(item?.email)}</Text> */}
        <Ionicons name='document' color={'red'} size={20} />
      </View>
      <View style={style.itemRight}>
        {/* <Text>{item?.email}</Text> */}
        <Text style={{ fontSize: 17 }}>Username</Text>
        <Text>{item?.email}</Text>
      </View>
      <View style={{ marginVertical: 'auto' }}>
        <TouchableOpacity>
          <Ionicons name='ellipsis-vertical' size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

  return (
    <ScrollView>
    <View style={{ backgroundColor: 'white' }}>
      <View style={{borderColor:'grey' ,borderWidth: 1, flexDirection: 'row', margin: 10, borderRadius: 25, height: 45, width: '85%', alignSelf: 'center' }}>
        <Octicons name='search' size={20} marginVertical={'auto'} marginLeft={'5%'} flex={1} />
        <TextInput
          style={{ marginLeft: '3%', flex: 11 }}
          onChangeText={onChangeSearch}
          placeholder="Search Files ..."
          // placeholderTextColor="black"
          value={search}
        />
      </View>
      <View style={{ height: 100, width: '85%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', marginBottom: '10%', backgroundColor: '#E8E5EF' }}>
        <View style={{ width: '25%', height: '60%', marginVertical: 'auto', marginLeft: '5%' }}>
          {/* Gambar */}
          {/* <Progress.Pie progress={0.4} size={50} /> */}
          <Progress.Circle size={50} unfilledColor='white' thickness={7} strokeCap='round' indeterminate={false} progress={0.65} marginVertical={'auto'} alignSelf={'center'} borderWidth={0} color='#9322C8' />
        </View>
        <View style={{ marginVertical: 'auto', marginLeft: '5%' }}>
          <Text style={{ fontSize: 20 }}>3 Student Active</Text>
          <Text style={{ color: 'grey', fontSize: 13 }}>Total of student</Text>
        </View>
      </View>

      <View>
        <View style={{ marginLeft: '8%', flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, flex: 4 }}>List of Mahasiswa</Text>
          <Text style={{ marginVertical: 'auto', flex: 1 ,color:'#9322C8'}}>See all</Text>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: '8%', marginTop: '5%' }}>
          <View style={{ flex: 4 }}>
            <TouchableOpacity style={{ borderWidth: 1, width: '60%', borderRadius: 50, height: 32, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
              <Text>Last Modified</Text>
              <MaterialCommunityIcons name='arrow-down-thin' size={20} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginVertical: 'auto' }}>
            <TouchableOpacity style={{ borderWidth: 1, width: '70%', alignItems: 'center', borderRadius: 20 }}>
              <Octicons name='apps'
                style={{ marginVertical: 'auto' }}
                size={20}
                padding={5}
                color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ borderWidth: 0, marginTop: '5%' }}>
          <FlatList data={data} renderItem={rederItem} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '$dedede',
    backgroundColor: 'white'
  },
  itemLeft: {
    flex: 1,
    paddingLeft: 20,
    textAlign: 'center',
    marginVertical: 'auto'
  },
  textItemLeft: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#dedede',
    width: 45,
    textAlign: 'center',
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
  itemRight: {
    flex: 4,
    marginVertical: 'auto',
  }
})