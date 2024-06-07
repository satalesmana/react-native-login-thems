import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';
import { Provider } from 'react-redux';
import{
  MenuScreen,
  LoginScreen,
  HomeScreen,
  RegisterInputFormScreen
} from "./screen"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen name="menu" options={{headerShown:false}} component={MenuScreen} />
        <Stack.Screen name="home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="login" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name="register" options={{headerShown:false}} component={RegisterInputFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
