import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Email } from "../../assets";
import { Person } from "../../assets";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CustomeInput = ({
  value,
  label,
  onChangeText,
  placeholder,
  source,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.containerInput}>
      <Text style={{ marginLeft: "10%", marginBottom: "3%", color: "white" }}>
        {label}
      </Text>
      <View style={styles.email}>
        <View style={styles.imgEmail}>
          <Image source={source}></Image>
        </View>
        <TextInput
          style={isActive ? styles.inputActive : styles.input}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#c7c7c7"
          value={value}
        />
      </View>
    </View>
  );
};
export const CustomeInput2 = ({ value, label, onChangeText, placeholder }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View
        style={{
          marginTop: "5%",
          marginBottom: "3%",
          flexDirection: "row",
          backgroundColor: "#fff6f5",
          width: "85%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <TextInput
          style={isActive ? styles.inputActive2 : styles.input2}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />
      </View>
    </View>
  );
};
export const CustomePassword2 = ({
  value,
  label,
  onChangeText,
  placeholder,
}) => {
  const [isActive, setIsActive] = useState(false);

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View
        style={{
          marginTop: "5%",
          marginBottom: "3%",
          flexDirection: "row",
          backgroundColor: "#fff6f5",
          width: "85%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <TextInput
          style={isActive ? styles.inputActive2 : styles.input2}
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
    </View>
  );
};
const styles = StyleSheet.create({
  containerInput: {
    marginTop: 20,
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

  input: {
    flexDirection: "row",
    height: 45,
    marginTop: 0,
    width: "88%",
    padding: 10,
    borderRadius: 0,
    color: "white",
  },

  inputActive: {
    flexDirection: "row",
    color: "white",
    height: 45,
    marginTop: 0,
    width: "88%",
    padding: 10,
    borderRadius: 0,
    backgroundColor: "#64575766",
  },

  input2: {
    height: 52,
    borderRadius: 10,
    padding: 15,
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#FFF6F5",
    flex: 8,
  },

  inputActive2: {
    height: 52,
    padding: 15,
    // marginTop: 12,
    borderWidth: 1,
    borderColor: "#c7d3ff",
    borderRadius: 10,
    backgroundColor: "#FFF6F5",
    width: "85%",
    alignSelf: "center",
    flex: 8,
  },
  // containerInput: {
  //   marginTop: "5%",
  //   marginBottom: "3%",
  //   flexDirection: "row",
  //   backgroundColor: "#fff6f5",
  //   width: "85%",
  //   alignSelf: "center",
  //   borderRadius: 10,
  // },
  text: {
    marginLeft: "10%",
    color: "black",
  },
  inputActive: {
    height: 52,
    padding: 15,
    // marginTop: 12,
    borderWidth: 1,
    borderColor: "#c7d3ff",
    borderRadius: 10,
    backgroundColor: "#FFF6F5",
    width: "85%",
    alignSelf: "center",
    flex: 8,
  },
  input: {
    height: 52,
    borderRadius: 10,
    padding: 15,
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#FFF6F5",
    flex: 8,
  },
  iconEye: {
    marginVertical: "auto",
    flex: 1,
    marginLeft: "5%",
  },
});
