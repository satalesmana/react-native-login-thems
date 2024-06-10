import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  RegisterScreen
} from "./screen"
const Stack = createNativeStackNavigator();
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (  

    <Provider store={store}> 
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}}component={LoginScreen} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Register" 
          options={{headerShown:false}}
          component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
