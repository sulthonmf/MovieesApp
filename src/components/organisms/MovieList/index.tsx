// MovieList.tsx
import React from 'react';
import { ScrollView } from 'react-native';

import { MovieCard } from '@/components/molecules';

import { styles } from './styles';

interface MovieListProps {
  movies: { rating: number; title: string; uri: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <ScrollView contentContainerStyle={styles.list} horizontal>
    {movies.map((movie, index) => (
      <MovieCard
        key={index}
        rating={movie.rating}
        title={movie.title}
        uri={movie.uri}
      />
    ))}
  </ScrollView>
);

export default MovieList;
