import type { RootStackParamList } from './types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Paths } from '@/navigation/paths';

import { AssetByVariant, CustomTabBar } from '@/components/atoms';
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

// Kustom Header untuk layar Home
function CustomHeader({navigation}: any) {
  return (
    <View style={styles.headerContainer}>
      {/* Ikon kiri */}
      <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        <AssetByVariant
          path={'DarkIcon'}
          resizeMode={'contain'}
          style={{ alignSelf: 'flex-start', height: 100, marginLeft: 10, width: 100 }}
        />
      </View>

      {/* Ikon kanan */}
      <TouchableOpacity
        onPress={() => Alert.alert('Search clicked')}
        style={styles.iconButton}
      >
        <Icon color="#fff" name="magnify" size={24} />
      </TouchableOpacity>
    </View>
  );
}

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === Paths.Home, // Header hanya muncul di Home
        tabBarActiveTintColor: '#ffbd59',
        tabBarBackground: () => <CustomTabBar />,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === Paths.Home) {
            iconName = 'home';
          } else if (route.name === Paths.MovieList) {
            iconName = 'heart';
          } else if (route.name === Paths.Account) {
            iconName = 'account';
          } else {
            iconName = '';
          }

          return <Icon color={color} name={iconName} size={size} />;
        },
        tabBarInactiveTintColor: '#FFF',
      })}
    >
      <Tab.Screen
        component={Home}
        name={Paths.Home}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
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
      primary: '#ffbd59',
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

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)', // Gunakan warna hitam semi-transparan
    borderBottomColor: 'rgba(255, 255, 255, 0.1)', // Warna garis bawah transparan
    borderBottomWidth: StyleSheet.hairlineWidth, // Opsional: Tambahkan garis bawah
    flexDirection: 'row',
    height: 66,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 8,
  },
});

export default RootNavigator;
