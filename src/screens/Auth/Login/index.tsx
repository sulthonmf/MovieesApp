import type { RootScreenProps } from '@/navigation/types';

import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { Paths } from '@/navigation/paths';

import { Button } from '@/components/atoms';

import { styles } from './styles';

function Login({ navigation }: RootScreenProps<Paths.Login>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Logika login (misalnya autentikasi ke backend)
      // Jika berhasil:
      navigation.navigate(Paths.MainTabs);
    } else {
      throw 'Please enter your email and password';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        value={email}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
      />
      <Button onPress={handleLogin}>Login</Button>
      <View style={styles.bottomText}>
        <Text
          onPress={() => navigation.navigate(Paths.SignUp)}
          style={styles.link}
        >
          Don't have an account? Sign up here.
        </Text>
        <Text
          onPress={() => navigation.navigate(Paths.ForgotPassword)}
          style={styles.link}
        >
          Forgot password?
        </Text>
      </View>
    </View>
  );
}

export default Login;
