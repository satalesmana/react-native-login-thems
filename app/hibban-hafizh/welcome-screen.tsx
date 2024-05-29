import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,  Image, Dimensions,  } from 'react-native';


interface NavigationProps {
  navigation: {
    navigate: (route: string) => void;
    // Define other methods and properties of the navigation object if necessary
  };
}

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}: NavigationProps){
  return (
    <View style={styles.container}>
       
       <View style={styles.sidebar}>
        {/* <ImageBackground source={require('../../assets/images/Group.png')} style={styles.sidebarimg}></ImageBackground> */}
      </View>


       <View style={styles.container2} >
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.subText}>Register your account now</Text>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Start Our journey</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF5FF',   
    width:windowWidth,
    marginBottom:60,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    marginRight:60,

  },
  welcomeText: {
    fontSize: 93,
    color: '#6C63FF', // Purple text color
    marginBottom: 10,
    fontFamily: 'Roboto'
  },
  subText: {
    fontSize: 23,
    color: '#1D2226', // Purple text color
    marginBottom: 30,
    opacity: 0.6,
    marginTop: -10,
    fontFamily:'Roboto'
  },
  sidebar: {
    // marginTop: 40,  
    right:45,
   width:60,
   height:450,
   backgroundColor:'#6C63FF',
   borderRadius:15
  },

  button: {
    backgroundColor: '#6B4EFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: 300, 
    height:75,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignContent:'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:'Roboto',
    opacity: 0.8,
    textAlign: 'center',
    top:10
  },

});


