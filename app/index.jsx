import {
  View,
  Image,
  TouchableOpacity
} from "react-native";


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
 LoginScreen,
 WelcomeScreen,
 RegisterScreen,
 HomeScreen,
 SplashScreen,
 ProfileScreen,
 FileScreen,
 SettingsScreen
}from "./screen"
import store from './store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',           
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{flexDirection: "row", padding:'40' }}>
                  <Image style={{
                    width: 35, height:35
                  }} source={require('../assets/images/Notification.png')}/>

                  <Image style={{
                    width: 35, height:35
                  }} 
                  source={require('../assets/images/AI Avatars.png')}/>
                </TouchableOpacity>
              </View>
            ),
          }} 
        />

        <Tab.Screen
          name="My Files"
          component={FileScreen}
          options={{
            tabBarLabel: 'My Files',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file" color={color} size={size} />
            ),
          }} 
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="Settings" color={color} size={size} />
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
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
      <Stack.Screen name="Splash" options={{headerShown:false}} component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen}options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen}options={{headerShown:false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;