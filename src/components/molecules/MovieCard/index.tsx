// MovieCard.tsx
import React from 'react';
import { View } from 'react-native';

import { Poster, Rating, Title } from '@/components/atoms';

import { styles } from './styles';

interface MovieCardProps {
  rating: number;
  title: string;
  uri: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ rating, title, uri }) => (
  <View style={styles.card}>
    <Poster uri={uri} />
    <Title text={title} />
    <Rating rating={rating} />
  </View>
);

export default MovieCard;
