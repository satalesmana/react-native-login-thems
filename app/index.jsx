
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  SplashScreen,
  RegisterInputScreen,
  ProfileScreen,
  SettingScreen,
  // FilesScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: '#9322C8' }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} 
        />
        {/* <Tab.Screen
          name="Files"
          component={FilesScreen}
          options={{
            tabBarLabel: 'My Files',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={size} />
            ),
          }} 
        /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
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
      <Stack.Screen name="Main" component={MainScreen}
            options={{headerShown:false}} />
      <Stack.Screen name="Splash" 
            options={{headerShown:false}}
            component={SplashScreen} />
      <Stack.Screen name="Welcome" 
          options={{headerShown:false}}
          component={WelcomeScreen} />
      <Stack.Screen name="Login" 
          options={{headerShown:false}}
          component={LoginScreen} />
          <Stack.Screen name="Register"
          options={{headerShown:false}}
          component={RegisterInputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;



