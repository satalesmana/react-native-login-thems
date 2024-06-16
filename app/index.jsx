import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  SignUpScreen,
  ProfileScreen,
  SettingScreen,
  FilesScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Image, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function MainScreen() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarLabel: 'Home',
        headerRight: () => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginRight: '10%' }}>
            {/* <Image source={require('../assets/images/google.png')} /> */}
            <MaterialIcons
              name="notifications"
              style={{
                marginLeft: "15%",
                marginVertical: 'auto'
                // color: "white",
              }}
              size={30}
              color="black"
            />
            <Image source={require('../assets/images/google.png')} />

          </View>
        ),
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='home' color={color} size={size} />
        ),
      }} />

      <Tab.Screen name='My Files' component={FilesScreen} options={{
        tabBarLabel: 'My Files',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='inbox' color={color} size={size} />
        ),
      }} />

      <Tab.Screen name='Blank' component={FilesScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='inbox' color={color} size={size} />
        ),
      }} />

      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        headerStyle: { backgroundColor: '#191819' },
        headerTintColor: 'white',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account-settings-outline' color={color} size={size} />
        ),
      }} />
      <Tab.Screen name='Account Setting' component={SettingScreen} options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <Feather name='settings' color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Main" >
          <Stack.Screen name="Main" component={MainScreen}
            options={{
              headerShown: false,
              headerStyle:
                { backgroundColor: 'red' }
            }} />
          <Stack.Screen name="Welcome"
            options={{ headerShown: false, }}
            component={WelcomeScreen} />
          <Stack.Screen name="Login"
            options={{ headerShown: false }}
            component={LoginScreen} />
          <Stack.Screen name="SignUp"
            options={{ headerShown: false }}
            component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
