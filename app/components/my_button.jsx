import { 
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const MyButton=(props)=>{
    return(
        <TouchableOpacity style={[styles.container, props.style]}>
            <Image 
                style={styles.iconStyle}
                source={props.imgUrl} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
const MyButton2=(props)=> {
    return (
        <TouchableOpacity style={[styles.container2, props.style]}>
                <Text style={styles.title}>{props.text}</Text>
            </TouchableOpacity>
    )
}
const MyButton3=(props)=> {
    return (
        <TouchableOpacity style={[styles.container3, props.style]}>
                <Text style={styles.title2}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderColor:'#cccfcc',
        borderWidth:3,
        borderRadius:30,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
    },
    container2:{
        padding:10,
        backgroundColor:'#418060',
        borderRadius:30,
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    container3:{
        padding:10,
        backgroundColor:'#ffffff',
        borderRadius:30,
        borderWidth:2,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    text:{
        fontWeight:"bold",
        marginLeft:5
    },
    title:{
        color:"#ffffff",
        padding: 3,
        fontSize:15,
        marginTop: -2
    },
    title2:{
        color:"#000000",
        padding: 3,
        fontSize:15,
        marginTop: -3.5
    },
    iconStyle:{
        marginRight:5,
        width:20,
        height:20,
        resizeMode:'center'
    }
})

export {
    MyButton,
    MyButton2,
    MyButton3,
}