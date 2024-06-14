import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  HomeScreen,
  RegisterScreen,
  DashboardScreen,
  ProfileScreen,
  FilesScreen,
  SettingScreen,
  DownloadScreen,
} from "./screen";
import store from "./store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      color={focused ? "purple" : "#BDBDBD"}
      focused={focused}
    />
  </View>
);

export const CustomTabBarButton = ({
  children,
  onPress,
  color,
  nameTitle,
  nameIcon,
  bgColor,
  focused,
  //   component,
  navigation,
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
      {/* <TabBg color={'yellow'} style={{position: 'absolute', top: 0}} /> */}

      <TouchableOpacity
        style={{
          top: -35.5,
          justifyContent: "center",
          alignItems: "center",
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "purple",
        }}
        onPress={onPress}
        // onPress={() => console.log('first')}
      >
        {/* {tabBarIcon({color, name})} */}
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
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "#BDBDBD",
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Files"
        component={FilesScreen}
        options={{
          tabBarLabel: "My Files",
          tabBarIcon: ({ color, size }) => (
            <Icon name="folder" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          tabBarButton: ({ color, size, onPress, props, focused }) =>
            CustomTabBarButton({
              onPress,
              props,
              color: "white",
              // color
              focused,
              bgColor: "red",
              nameIcon: "download-cloud",
            }),
          // tabBarIcon: ({ color, size }) => (
          //   <Icon name="download-cloud" color={color} size={30} />
          // ),
        }}
        style={{
          backgroundColor: "purple",
          width: 50,
          height: 50,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color, size }) => (
            <Icon name="logout" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={DashboardScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
