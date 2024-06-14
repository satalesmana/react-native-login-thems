import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer';
import ApiLib from '../../lib/ApiLib'
import { useSelector, useDispatch } from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)

  const fetchData = async () => {
    try {
      const res = await ApiLib.post('action/find', {
        "dataSource": "Cluster0",
        "database": "lp3i-mobile-app",
        "collection": "users",
        "filter": filter
      })

      if (res.data?.documents) {
        dispatch(setData(res.data.documents))
      } else {
        dispatch(clearData())
      }

    } catch (err) {
      console.log(err);
    }
  }

  const getInitial = (email) => {
    let name = ''

    if (email.length > 0)
      name += email.substring(0, 1);

    return name.toLocaleUpperCase()
  }

  useEffect(() => {
    fetchData()
  }, [])

  const rederItem = ({ item }) => (
    <TouchableOpacity style={style.containerItem}>
      <View style={style.itemLeft}>
        <Text style={style.textItemLeft}>{getInitial(item?.email)}</Text>
      </View>
      <View style={style.itemRight}>
        <Text>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <FlatList data={data} renderItem={rederItem} />
    </View>
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
    textAlign: 'center'
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