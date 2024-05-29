import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  RegisterScreen,
  LoginScreen
} from "./hibban-hafizh"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} 
         options={{headerShown:false}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} 
         options={{headerShown:false}}
        />
<<<<<<< HEAD
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
=======
        <Stack.Screen name="Login" component={LoginScreen} />
>>>>>>> d61e4d7b985134ba13f8649b1c261af53e1af1cd
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;