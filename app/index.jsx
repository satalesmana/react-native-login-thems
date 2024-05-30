import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
  MenuScreen,
  LoginScreen,
  HomeScreen,
  RegisterInputFormScreen
} from "./screen"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" options={{headerShown:false}} component={MenuScreen} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterInputFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
