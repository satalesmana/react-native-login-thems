// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { 
//   LoginScreen,
//   HomeScreen,
//   WelcomeScreen,
//   RegisterInputScreen
// } from "./screen"
// import store from './store'
// import { Provider } from 'react-redux'
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" 
//           options={{headerShown:false}}
//           component={LoginScreen} />
//         <Stack.Screen name="Welcome" 
//           options={{headerShown:false}}
//           component={WelcomeScreen} />
//         <Stack.Screen name="Register" 
//           options={{headerShown:false}}
//           component={RegisterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  SplashScreen,
  RegisterInputScreen,
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Home" component={HomeScreen} />
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

