import type { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home({ navigation }: RootScreenProps<Paths.Home>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text>Welcome to the Movie Catalog App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default Home;
