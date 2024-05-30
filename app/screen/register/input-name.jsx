import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView
} from "react-native";  
import { 
    CustomeInput,
    FbButton
} from '../../components'

export default function RegisterInputNameScreen(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textHeader}>What's your name?</Text>
            <Text>Enter the name you use in real life.</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    label="First name"/>
                
                <CustomeInput 
                    label="Surename"/>
            </View>

            <FbButton title="Next"/>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    
})