import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    Dimensions
  } from 'react-native';
  import { useEffect } from 'react';
  import { setData, clearData } from '../../store/reducer/usersReducer'
  import { clerAuth } from '../../store/reducer/authReducer';
  import ApiLib from "../../lib/Apilib";
  import { useSelector, useDispatch } from 'react-redux'

  const windowWidth =Dimensions.get('window').width;
  export default function ProfileScreen(){
    const dispatch = useDispatch()
    const data = useSelector((state) => state.users.data)
    const auth = useSelector((state) => state.auth)
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
    <View>
        <View style={{ width: windowWidth }}>
        <View style={[styles.container, { borderWidth: 1, margin: 10, backgroundColor: "#191819", flexDirection: "row",marginLeft:5,borderRadius:10,height:200 }]}>
         <Image source={require('../../../assets/images/AI Avatars.png')}
        style={{ width: 100, height: 100, marginLeft: -0.2 }}/>
        </View> 
        <View style={{alignItems:"center",width:240, marginLeft:-20}}>
          <Text style={{color:"white"}}>{auth.firstName}</Text>
          <Text style={{}}>{auth.email}</Text>
         </View>
         <View style={[styles.containerItem, {borderWidth:2,borderRadius:10,height:400,marginTop:-5}]}>

            <View style={styles.itemLeft}> 
            </View>
            <View style={styles.itemRight}>
              <Text>{item?.nim}</Text>
              <Text style={{color:"#808080"}}>Nim</Text>
              <Text>{item?.jurusan}</Text>
              <Text style={{color:"#808080"}}>Jurusan</Text>
              <Text>{item?.kode}</Text>
              <Text style={{color:"#808080"}}>Kode</Text>
              <Text>{item?.number}</Text>
              <Text style={{color:"#808080"}}>number</Text>
              {/* <Text>{item?.email}</Text> */}
            </View>
         </View>
        </View>
    </View>
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
    container: {
        padding: 20,
        marginTop: 0
    },
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