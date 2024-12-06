// CurrentlyShowing.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { MovieList } from '@/components/organisms';

import { styles } from './styles';

interface CurrentlyShowingProps {
  movies: { rating: number; title: string; uri: string }[];
}

const CurrentlyShowing: React.FC<CurrentlyShowingProps> = ({ movies }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Sedang Tayang</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
    <MovieList movies={movies} />
  </View>
);

export default CurrentlyShowing;
