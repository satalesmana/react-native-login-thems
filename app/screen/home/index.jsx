
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer'
import ApiLib from "../../lib/ApiLib"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen(){
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)

  const fetchData = async ()=>{
    try{
      const res = await ApiLib.post('/action/find',{
        "dataSource": "Cluster0",
        "database": "lp3i_app",
        "collection": "users",
        "filter": filter
      })

      if(res.data?.documents){
        dispatch(setData(res.data.documents))
      }else{
        dispatch(clearData())
      }
    }catch(err){
      console.log(err)
    }
  }

  const getInitial=(firstName)=>{
    let name = ''

    if(firstName)
        name += firstName.substring(0,1);
    return name.toLocaleUpperCase()
  }

  useEffect(()=>{
    fetchData()
  },[])

  const renderSearch = () => {
    return (
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={filter}
          onChangeText={(text) => dispatch(setFilter(text))}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => fetchData()}
        >
        </TouchableOpacity>
      </View>
    );
  };

  const rederItem = ({item}) => (
    <View>
    <TouchableOpacity 
        style={styles.containerItem}>
          <View style={styles.itemLeft}>
            <Text style={styles.textItemLeft}>{getInitial(item.firstName)}</Text>
          </View>
          <View style={styles.itemRight}>
            <Text>{item?.firstName}</Text>
            <Text>{item?.email}</Text>
          </View>
    </TouchableOpacity>
          </View>
  );
  
  return (
    <View >
      {renderSearch()}
      <Text style={styles.textList}>List Mahasiswa</Text>
        <FlatList
          data={data}
          renderItem={rederItem}
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
    borderColor: '#dedede'
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
  }
})
