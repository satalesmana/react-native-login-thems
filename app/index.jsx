import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    WelcomeScreen,
    LoginScreen,
    CreateScreen
}from "./screen"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Create" options={{headerShown:false}} component={CreateScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
