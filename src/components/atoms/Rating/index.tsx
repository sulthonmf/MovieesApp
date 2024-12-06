// Rating.tsx
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => (
  <View style={styles.ratingContainer}>
    {[...Array(rating)].map((_, index) => (
      <Text key={index} style={styles.star}>
        ★
      </Text>
    ))}
  </View>
);

export default Rating;
