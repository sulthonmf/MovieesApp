import type { AdditionalParallaxProps } from 'react-native-snap-carousel';

import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

const entries = [
  {
    illustration: 'https://path-to-your-image.png', // Ganti dengan path gambar yang Anda gunakan
    subtitle: 'Mulai Rp. 20,000 / 30 Hari',
    title: 'Nonton Dimana Saja, Kapan Saja',
  },
  {
    illustration: 'https://path-to-your-image.png', // Ganti dengan path gambar yang Anda gunakan
    subtitle: 'Mulai Rp. 20,000 / 30 Hari',
    title: 'Nonton Dimana Saja, Kapan Saja',
  },
  {
    illustration: 'https://path-to-your-image.png', // Ganti dengan path gambar yang Anda gunakan
    subtitle: 'Mulai Rp. 20,000 / 30 Hari',
    title: 'Nonton Dimana Saja, Kapan Saja',
  },
  // Tambahkan lebih banyak entri sesuai kebutuhan
];

interface MyCarouselProps {
  data: typeof entries;
}

const MyCarousel: React.FC<MyCarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const renderItem = (
    { index, item }: { index: number; item: (typeof entries)[0] },
  ) => {
    const isActive = index === activeIndex;
    return (
      <View style={styles.item}>
        {' '}
        {/* <ParallaxImage
          containerStyle={styles.imageContainer}
          parallaxFactor={0.4}
          source={{ uri: item.illustration }}
          style={styles.image}
          {...parallaxProps}
        />{' '} */}
        <Text style={styles.title}>{item.title}</Text>{' '}
        <Text style={styles.subtitle}>{item.subtitle}</Text>{' '}
        <TouchableOpacity style={styles.button}>
          {' '}
          <Text style={styles.buttonText}>Klik Disini</Text>{' '}
        </TouchableOpacity>{' '}
      </View>
    );
  };
  return (
    <Carousel
      data={data}
      hasParallaxImages={true}
      itemWidth={screenWidth - 60}
      onSnapToItem={(index) => setActiveIndex(index)}
      renderItem={renderItem}
      sliderHeight={screenWidth}
      sliderWidth={screenWidth}
    />
  );
};

export default MyCarousel;
