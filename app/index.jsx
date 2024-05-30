import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen
} from "./screen"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" 
          options={{headerShown:false}}
          component={WelcomeScreen} />
        <Stack.Screen name="Login" 
          options={{headerShown:false}}
          component={LoginScreen} />
        <Stack.Screen name="SignUp" 
          options={{headerShown:false}}
          component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
