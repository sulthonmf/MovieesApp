// BannerText.tsx
import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface BannerTextProps {
  text: string;
}

const BannerText: React.FC<BannerTextProps> = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

export default BannerText;
