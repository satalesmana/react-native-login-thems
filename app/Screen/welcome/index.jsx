import React from 'react';
import { View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity } 
  from 'react-native';

  export default function WelcomeScreen({navigation}){
    const goLogin=()=>{
      navigation.navigate("Login")
    }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/FrameWelcome.png')} // Replace with your image path
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
      <View style={styles.container3}>
        <TouchableOpacity onPress={goLogin}>
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
    fontSize: 15,
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
    width: 15,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#2F2E41'
  },

  paginationDot: {
    width: 15,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#6C63FF',
    marginHorizontal: 5,
  },
  container3: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    marginRight: 20,
  },
});
