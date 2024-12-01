import { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Account({ navigation }: RootScreenProps<Paths.Account>) {
  const handleLogout = () => {
    // Tambahkan logika logout di sini 
    // Navigasi ke stack Auth setelah logout
    navigation.reset({
          index: 0,
          routes: [{ name: Paths.Landing }],
        });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Screen</Text>
      <Text>User: John Doe</Text>
      <Text>Email: johndoe@example.com</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default Account;
