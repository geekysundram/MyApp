import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import RootStackParamList from './type';
import { navigationRef } from './navigate';
const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
        
        <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator