import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native"
export const CustomeInput=({
    label,
    value,
    onChangeText,
    placeholder
})=>{
    const [isActive, setIsActive] = useState(false);
    return(
        <View style={styles.containerInput}>
            <Text>{label}</Text>
            <TextInput 
                style={ isActive ? styles.inputActive : styles.input }
                onFocus={()=>setIsActive(true)}
                onBlur={()=>setIsActive(false)}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor='#c7c7c7'
                value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        marginTop:20
    },
    input:{
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#dedede',
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
