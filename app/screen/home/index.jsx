import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer'
import ApiLib from "../../lib/Apilib";
import { useSelector, useDispatch } from 'react-redux'
export default function HomeScreen(){
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)

  const fetchData = async ()=>{
    try{
      const res = await ApiLib.post('/action/find',{
        "dataSource": "Cluster0",
        "database": "lp3i-mobile",
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

  
  useEffect(()=>{
    fetchData()
  },[])

  const rederItem = ({item}) => (
    <TouchableOpacity 
        style={styles.containerItem}>
          <View style={styles.itemLeft}>
            
          </View>
          <View style={styles.itemRight}>
            <Text>{item?.firstName} {item?.sureName}</Text>
            <Text>{item?.email}</Text>
          </View>
    </TouchableOpacity>
  );

  return (
    <View >
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
  }
})