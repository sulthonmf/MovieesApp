import type { RootStackParamList } from './types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Paths } from '@/navigation/paths';

import { CustomTabBar } from '@/components/atoms';
import {
  Account,
  ForgotPassword,
  Home,
  Landing,
  Login,
  MovieList,
  SignUp,
} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF0303',
        tabBarBackground: () => <CustomTabBar />,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Movie List') {
            iconName = 'heart';
          } else if (route.name === 'Account') {
            iconName = 'account';
          } else {
            iconName = '';
          }

          return <Icon color={color} name={iconName} size={size} />;
        },
        tabBarInactiveTintColor: '#4E6E81',
      })}
    >
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
        <Stack.Navigator
          initialRouteName={Paths.Landing}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen component={Landing} name={Paths.Landing} />
          <Stack.Screen component={AuthStack} name={Paths.AuthStack} />
          <Stack.Screen component={MainTabs} name={Paths.MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigator;
