import type { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const dummyMovies = [
  { id: '1', title: 'The Shawshank Redemption' },
  { id: '2', title: 'The Godfather' },
  { id: '3', title: 'The Dark Knight' },
  { id: '4', title: 'Pulp Fiction' },
];

function MovieList({ navigation }: RootScreenProps<Paths.MovieList>) {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.movieItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie List</Text>
      <FlatList
        data={dummyMovies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f9f9f9', flex: 1, padding: 16 },
  movieItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
});

export default MovieList;
