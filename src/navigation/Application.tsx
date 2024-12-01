import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import {
  Account,
  ForgotPassword,
  Home,
  Landing,
  Login,
  MovieList,
  SignUp
} from '@/screens';
import type { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen component={Home} name={Paths.Home} />
      <Tab.Screen component={MovieList} name={Paths.MovieList} />
      <Tab.Screen component={Account} name={Paths.Account} />
    </Tab.Navigator>
  );
}

// Auth Stack Navigator
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name={Paths.Login} />
      <Stack.Screen component={SignUp} name={Paths.SignUp} />
      <Stack.Screen component={ForgotPassword} name={Paths.ForgotPassword} />
    </Stack.Navigator>
  );
}

// Root Stack Navigator
function RootNavigator() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: 'rgb(140, 201, 125)',
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName={Paths.Landing} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Landing} name={Paths.Landing} />
          <Stack.Screen component={AuthStack} name={Paths.AuthStack} />
          <Stack.Screen component={MainTabs} name={Paths.MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigator;
