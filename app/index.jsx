import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  OtpScreen,
  VerificationScreen,
  SuccessScreen,
  HomeScreen
} from "./screen"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Autentikasi">
        <Stack.Screen name="Autentikasi" 
          options={{headerShown:false}}
          component={OtpScreen} />
        <Stack.Screen name="Verify" 
          options={{headerShown:false}}
          component={VerificationScreen} />
        <Stack.Screen name="Succes" 
          options={{headerShown:false}}
          component={SuccessScreen} />
          <Stack.Screen name="Home" 
          options={{headerShown:false}}
          component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;