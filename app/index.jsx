import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  SplashScreen,
  Register,
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Splash" 
            options={{headerShown:false}}
            component={SplashScreen} />
          <Stack.Screen name="Login" 
            options={{headerShown:false}}
            component={LoginScreen} />
          <Stack.Screen name="RegisterName" 
            options={{headerShown:false}}
            component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
