import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    LoginScreen,
    RegisterInputScreen,
    WelcomeScreen,
    HomeScreen
}from "./screen"

import store from './store'
import { Provider } from 'react-redux'
import { RegisterInputNameScreen } from './screen/register';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterName" component={RegisterInputNameScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;