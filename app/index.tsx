import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  RegisterScreen,
  LoginScreen
} from "./hidayatnurwahid"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;