import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const CustomeInput = ({ value, label, onChangeText }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.containerInput}>
            <Text>{label}</Text>
            <TextInput
                style={isActive ? styles.inputActive : styles.input}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        marginTop: 20,
    },
    // input:{
    //     height: 40,
    //     marginTop: 12,
    //     borderWidth: 1,
    //     padding: 10,
    //     borderColor:'#dedede',
    //     borderRadius:15
    // },
    inputActive: {
        height: 52,
        // marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#c7d3ff",
        borderRadius: 10,
        backgroundColor: "#ebf2fa",
    },
    input: {
        height: 52,
        borderRadius: 10,
        padding: 15,
        width: "100%",
        alignSelf: "center",
    },
});
