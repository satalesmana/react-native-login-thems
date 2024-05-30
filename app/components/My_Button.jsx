import { Image,TouchableOpacity,Text,StyleSheet
} from 'react-native'

export const MyButton=(props)=>{
   return (
       <TouchableOpacity style={[style.container, props.style]}>
           <Image
           style={style.iconStyle} 
           source={props.Image}/>
           <Text style={{marginLeft: 10}}>{props.text}</Text>
       </TouchableOpacity>
   )
}
const style = StyleSheet.create({
   container:{
       padding:10,
       borderColor:'#c7c7c7',
       borderWidth:0.5,
       borderRadius:10,
       flex:1,
       flexDirection:'row',
       justifyContent:'center',
       marginVertical: "auto"

   },
   iconStyle: {
    width:15,
    height: 15,
   }
})