import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    WelcomeScreen,
    LoginScreen,
    CreateScreen,
    HomeScreen
}from "./screen"
import store from './store'
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}> 
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Create" options={{headerShown:false}} component={CreateScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
