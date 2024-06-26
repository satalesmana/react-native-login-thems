import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native"

export const CustomeInput=({
    value,
    label
})=>{
    const [isActive, setIsActive] = useState(false);

    return(
        <View style={styles.containerInput}>
            <Text>{label}</Text>
            <TextInput 
                style={ isActive ? styles.inputActive : styles.input }
                onFocus={()=>setIsActive(true)}
                onBlur={()=>setIsActive(false)}
                value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        marginTop:20
    },
    input:{
        height: 50,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#929694',
        borderRadius:15
    },
    inputActive:{
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#c7d3ff',
        borderRadius:15,
        backgroundColor:'#ebf2fa'
    }
})