import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  SignUpScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen} />
          <Stack.Screen name="Login"
            options={{ headerShown: false }}
            component={LoginScreen} />
          <Stack.Screen name="SignUp"
            options={{ headerShown: false }}
            component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
