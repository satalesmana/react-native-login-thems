import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, navigation } from 'react-native';

export default function WelcomeScreen({navigation}){
  const goRegister=()=>{
    navigation.navigate("Register")
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/gambar-welcome.png')} // Replace with your image path
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Explore the</Text>
      <Text style={styles.title}>world easily</Text>
      <Text style={styles.subtitle}>To your desire</Text>
      <View style={styles.pagination}>
        <View style={styles.paginationDot1} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={goRegister}>
      <Image

        source={require ('../../../assets/images/NextButton.png')}
        style={styles.button}
      />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    width: '85%',
    height: 200,
    marginTop: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 150,
    marginLeft: 40
  },


  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15
  },
  subtitle: {
    fontSize: 20,
    color: '#888',
    marginBottom: 40,
    marginLeft: 15
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 15
  },

  paginationDot1: {
    width: 19,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#FF3951'
  },

  paginationDot: {
    width: 19,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#FFB6B6',
    marginHorizontal: 5,
  },
  container2: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    marginRight: 20,
  },
});