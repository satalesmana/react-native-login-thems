import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useEffect } from 'react';
import { setData, clearData } from '../../store/reducer/usersReducer'
import ApiLib from "../../lib/ApiLib"
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen(){
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.data)
  const filter = useSelector((state) => state.users.formFilter)

  const fetchData = async ()=>{
    try{
      const res = await ApiLib.post('/action/find',{
        "dataSource": "AtlasCluster",
        "database": "ekireski",
        "collection": "ekireski",
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

  const getInitial=(email, number, password)=>{
    let name = ''

    if(email.length > 0)
        nama += email.substring(0,1);
    
    if(number.length > 0)
      nim += number.substring(0,1);

      if(password.length > 0)
      programstudi += password.substring(0,1);

    return name.toLocaleUpperCase()
  }

  useEffect(()=>{
    fetchData()
  },[])


  const rederItem = ({item}) => (
    <TouchableOpacity 
        style={styles.containerItem}>
          <View style={styles.itemLeft}>
            <Text style={styles.textItemLeft}>{getInitial(item.email, item?.number, item?.password)}</Text>
          </View>
          <View style={styles.itemRight}>
            <Text>{item?.email} {item?.number}</Text>
            <Text>{item?.password}</Text>
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