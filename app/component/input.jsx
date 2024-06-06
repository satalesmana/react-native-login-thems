import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CustomeInput = ({ value, label, onChangeText, placeholder }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.containerInput}>
            {/* <Text style={styles.text}>{label}</Text> */}
            <TextInput
                style={isActive ? styles.inputActive : styles.input}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
        </View>
    );
};

export const CustomePassword = ({ value, label, onChangeText, placeholder }) => {
    const [isActive, setIsActive] = useState(false);

    // State variable to track password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.containerInput}>
            {/* <Text style={styles.text}>{label}</Text> */}
            <TextInput
                style={isActive ? styles.inputActive : styles.input}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                secureTextEntry={!showPassword}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
            <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#aaa"
                style={styles.iconEye}
                onPress={toggleShowPassword}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        marginTop: '5%',
        marginBottom: '3%',
        flexDirection: 'row',
        backgroundColor: '#fff6f5',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 10
    },
    text: {
        marginLeft: '10%'
    },
    inputActive: {
        height: 52,
        padding: 15,
        // marginTop: 12,
        borderWidth: 1,
        borderColor: "#c7d3ff",
        borderRadius: 10,
        backgroundColor: "#FFF6F5",
        width: '85%',
        alignSelf: 'center',
        flex: 8,
    },
    input: {
        height: 52,
        borderRadius: 10,
        padding: 15,
        width: "85%",
        alignSelf: "center",
        backgroundColor: '#FFF6F5',
        flex: 8
    },
    iconEye: {
        marginVertical: "auto",
        flex: 1,
        marginLeft: '5%'
    }
});
