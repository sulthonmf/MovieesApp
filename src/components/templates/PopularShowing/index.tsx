// CurrentlyShowing.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { MovieList } from '@/components/organisms';

import { styles } from './styles';

interface PopularShowingProps {
  movies: { rating: number; title: string; uri: string }[];
}

const PopularShowing: React.FC<PopularShowingProps> = ({ movies }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Paling Populer</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
    <MovieList movies={movies} />
  </View>
);

export default PopularShowing;
