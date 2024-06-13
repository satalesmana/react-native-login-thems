import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    LoginScreen,
    RegisterInputScreen,
    WelcomeScreen,
    HomeScreen,
    ProfileScreen
}from "./screen"

import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RegisterInputNameScreen } from './screen/register';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainScreen(){
  return(
    <Tab.Navigator initialRouteName="Home"
    screenOptions={{tabBarActiveTintColor:'#e91e63'}}>
      <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        ),
      }}
      />
        <Tab.Screen 
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="account" color={color} size={size}/>
        ),
      }}
      />
    </Tab.Navigator>
  )
}
function App() {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterName" component={RegisterInputNameScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;