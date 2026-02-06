import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/splash';
import SignIn from './screens/SignIn';
import Intermediate from './screens/Intermediate/Intermediate';
import Store from './screens/Store';
import Header from './components/Header';
import Storeperformance from './screens/Store/storeperformance';

const Stack = createNativeStackNavigator();

const App = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Intermediate" component={Intermediate} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Store" component={Store} options={{ headerShown: false }} />
        <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
        <Stack.Screen name="Storeperformance" component={Storeperformance} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  </>
}

export default App