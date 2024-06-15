import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import{
  MenuScreen,
  LoginScreen,
  HomeScreen,
  MyFileScreen,
  UserScreen,
  SettingsScreen,
  RegisterInputFormScreen
} from "./screen"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="home"
      screenOptions={{ tabBarActiveTintColor: '#40b83b' }}>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',headerShown:false, 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} 
        />

        <Tab.Screen
          name="myfile"
          component={MyFileScreen}
          options={{
            tabBarLabel: 'MyFile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="user"
          component={UserScreen}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shield" color={color} size={size} />
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
      <Stack.Navigator initialRouteName="menu">
      <Stack.Screen name="main" options={{headerShown:false}} component={MainScreen} />
        <Stack.Screen name="menu" options={{headerShown:false}} component={MenuScreen} />
        <Stack.Screen name="login" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name="register" options={{headerShown:false}} component={RegisterInputFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
