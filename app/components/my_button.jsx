import { 
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export const MyButton=(props)=>{
    return(
        <TouchableOpacity style={[styles.container, props.style]}>
            <Image 
                style={styles.iconStyle}
                source={props.imgUrl} />
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor:'#e1e6ed',
        backgroundColor:'#d8e2f2',
        borderRadius:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:25
    },
    iconStyle:{
        marginRight:5,
        width:20,
        height:20,
        resizeMode:'center'
    }
})