import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,  Image } from 'react-native';


interface NavigationProps {
  navigation: {
    navigate: (route: string) => void;
    // Define other methods and properties of the navigation object if necessary
  };
}
export default function WelcomeScreen({navigation}: NavigationProps){
  return (
    <View style={styles.container}>
       
            <Image 
                source={require('../../assets/images/Group.png')} 
                style={styles.sidebar} 
            />
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
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    right:15
  },
  welcomeText: {
    fontSize: 73,
    color: '#6C63FF', // Purple text color
    marginBottom: 10,
    fontFamily: 'Roboto'
  },
  subText: {
    fontSize: 18,
    color: '#1D2226', // Purple text color
    marginBottom: 30,
    opacity: 0.6,
    marginTop: -10
  },
 sidebar: {
  width: 30, // Adjust width as needed
    height: 550,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#6B4EFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: 275,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:'Roboto',
    opacity: 0.8,
    textAlign: 'center'
  },
});
