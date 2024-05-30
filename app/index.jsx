
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen
} from "./SayyidHuseinAbdullah"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" 
          options={{headerShown:false}}
          component={LoginScreen} />
        <Stack.Screen name="Home" 
          options={{headerShown:false}}
          component={HomeScreen} />
        <Stack.Screen name="Register" 
          options={{headerShown:false}}
          component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;