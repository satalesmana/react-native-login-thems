import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    WelcomeScreen,
    LoginScreen,
    CreateScreen,
    HomeScreen,
    ProfileScreen,
    SettingsScreen
}from "./screen"
import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <Tab.Screen 
      name="Account Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel:'Settings',
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="settings" color={color} size={size}/>
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
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Create" options={{headerShown:false}} component={CreateScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
