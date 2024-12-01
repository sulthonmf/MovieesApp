import { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function ForgotPassword({ navigation }: RootScreenProps<Paths.ForgotPassword>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Logika login (misalnya autentikasi ke backend)
      // Jika berhasil:
      navigation.navigate(Paths.MainTabs);
    } else {
      throw('Please enter your email and password');
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
      <Button onPress={handleLogin} title="Login" />
      <Text onPress={() => navigation.navigate(Paths.SignUp)} style={styles.link}>
        Don't have an account? Sign up here.
      </Text>
      <Text
        onPress={() => navigation.navigate(Paths.ForgotPassword)}
        style={styles.link}
      >
        Forgot password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    padding: 12,
  },
  link: { color: 'blue', marginTop: 8, textAlign: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default ForgotPassword;
