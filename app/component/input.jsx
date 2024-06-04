import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image
} from "react-native"
import { Email } from "../../assets";
export const CustomeInput=({
    value,
    label,
    onChangeText,
    placeholder
})=>{
    const [isActive, setIsActive] = useState(false);

    return(
        <View style={styles.containerInput}>
            <Text style={{marginLeft:"10%",marginBottom:"3%",color:"white",}}>{label}</Text>
            <View style={styles.email}>
                <View style={styles.imgEmail}>
                  <Image source={Email}></Image>
                </View>
            <TextInput 
                style={ isActive ? styles.inputActive : styles.input }
                onFocus={()=>setIsActive(true)}
                onBlur={()=>setIsActive(false)}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#c7c7c7"
                value={value}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        marginTop:20
    },
    email: {
        flexDirection: "row",
        height: 45,
        backgroundColor: "#64575766",
        borderStyle: "solid",
        borderRadius: 8,
        width: "85%",
        alignSelf: "center",
      },
      imgEmail: {
        flex: 1,
        marginVertical: "auto",
        marginLeft: 15,
      },
    input:{
        flexDirection: "row",
        height: 45,
        marginTop: 0,
        width: "88%",
        padding: 10,
        borderRadius:0
    },
    
    inputActive:{
        flexDirection: "row",
        color: "white",
        height: 45,
        marginTop: 0,
        width: "88%",
        padding: 10,
        borderRadius:0,
        backgroundColor:'#64575766'
    }
})