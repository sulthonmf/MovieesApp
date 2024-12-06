// Poster.tsx
import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

interface PosterProps {
  uri: string;
}

const Poster: React.FC<PosterProps> = ({ uri }) => (
  <Image source={{ uri }} style={styles.poster} />
);

export default Poster;
