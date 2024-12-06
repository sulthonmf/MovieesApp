// BannerSwiper.tsx
import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper from 'react-native-swiper';

import { BannerItem } from '@/components/molecules';

interface BannerSwiperProps {
  entries: { backgroundColor: string; title: string }[];
}

const BannerSwiper: React.FC<BannerSwiperProps> = ({ entries }) => (
  <Swiper
    activeDotColor="#FFD700"
    centerContent={true}
    dotColor="#888"
    showsButtons={false}
  >
    {entries.map((item, index) => (
      <View key={index + Math.random()}>
        <BannerItem backgroundColor={item.backgroundColor} title={item.title} />
      </View>
    ))}
  </Swiper>
);

export default BannerSwiper;
