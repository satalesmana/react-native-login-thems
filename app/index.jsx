import {
  View,
  TouchableOpacity,
} from "react-native";


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  SplashScreen,
  Register,
  SettingsScreen,
  ProfileScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const tabBarFloat = ({ focused, color, nameIcon }) => (
  <View style={{ alignItems: "center" }}>
    {/* <Text>{focused ? "purple" : "white"}</Text> */}
    <Icon
      name={nameIcon}
      size={24}
      solid
      color={focused ? "blue" : "#0D2063"}
      focused={focused}
    />
  </View>
);

export const CustomTabBarButton = ({
  onPress,
  color,
  nameTitle,
  nameIcon,
  props,
}) => {
  console.log("onpress", onPress);
  console.log("color", color);
  console.log("navigation", props);
  return (
    <View
      style={{ position: "relative", width: 75, alignItems: "center" }}
      pointerEvents="box-none"
    >
      <TouchableOpacity
        style={{
          top: -35.5,
          justifyContent: "center",
          alignItems: "center",
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "blue",
        }}
        onPress={onPress}
      >
        {tabBarFloat({ color, nameIcon, nameTitle })}
      </TouchableOpacity>
    </View>
  );
};

function MainScreen({}) {
  return (
    <Tab.Navigator
      initialRouteName="BottomBar"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#BDBDBD",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Files"
        component={HomeScreen}
        options={{
          tabBarLabel: "My Files",
          tabBarIcon: ({ color, size }) => (
            <Icon name="inbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={HomeScreen}
        options={{
          tabBarButton: ({ color, size, onPress, props, focused }) =>
            CustomTabBarButton({
              onPress,
              props,
              color: "white",
              // color
              focused,
              bgColor: "red",
              nameIcon: "upload-cloud",
            }),
        }}
        style={{
          backgroundColor: "blue",
          width: 50,
          height: 50,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account Setting"
        component={HomeScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
          <Stack.Screen name="Splash" options={{headerShown:false}} component={SplashScreen} />
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
          <Stack.Screen name="RegisterName" options={{headerShown:false}} component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
