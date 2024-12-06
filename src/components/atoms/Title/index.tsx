// Title.tsx
import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

export default Title;
