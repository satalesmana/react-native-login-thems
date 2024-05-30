import { 
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native"

const MyButton=(props)=> {

    return (
        <TouchableOpacity style={[styles.container, props.style]}>
        <Image
            style={styles.iconStyle}
            source={props.imgUrl} />
                <Text>{props.text}</Text>
            </TouchableOpacity>
    )
}

const MySigin=(props)=> {
    return (
        <TouchableOpacity style={[styles.container2, props.style]}>
                <Text style={styles.text1}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container:{
        padding:10,
        borderColor:'#e1e6ed',
        backgroundColor:'#d8e2f2',
        borderWidth:0.5,
        borderRadius:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:'auto',
        color: 'black'
    },
    container2:{
        padding:10,
        backgroundColor:'#1F41BB',
        borderWidth:0.5,
        borderRadius:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:'auto'
    },
    text1:{
        color:'white'
    }
})

export {
    MySigin,
    MyButton
}                       