// HomeBanner.tsx
import React from 'react';
import { View } from 'react-native';

import { BannerSwiper } from '@/components/organisms';

import { styles } from './styles';

interface HomeBannerProps {
  entries: { backgroundColor: string; title: string }[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ entries }) => (
  <View style={styles.container}>
    <BannerSwiper entries={entries} />
  </View>
);

export default HomeBanner;
