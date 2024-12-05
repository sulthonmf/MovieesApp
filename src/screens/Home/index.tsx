import type { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

// import { styles } from './styles';

const { width } = Dimensions.get('window');
const data = [
  { id: 1, image: 'https://via.placeholder.com/400x200/0000FF/FFFFFF' },
  { id: 2, image: 'https://via.placeholder.com/400x200/8A2BE2/FFFFFF' },
  { id: 3, image: 'https://via.placeholder.com/400x200/FF4500/FFFFFF' },
  { id: 4, image: 'https://via.placeholder.com/400x200/32CD32/FFFFFF' },
];

function Home({ navigation }: RootScreenProps<Paths.Home>) {
  const itemWidth = width * 0.7; // Lebar item carousel

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Carousel
          data={data}
          height={250}
          loop
          mode="parallax"
          modeConfig={{
            parallaxScrollingOffset: 50, // Mengatur offset parallax
            parallaxScrollingScale: 0.8, // Mengatur skala untuk item di sisi
          }}
          pagingEnabled
          renderItem={renderItem}
          scrollAnimationDuration={1000}
          snapEnabled
          width={itemWidth}
        />
      </View>
    </View>
  );
}

const renderItem = ({ animationValue, index, item }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    // Efek transparansi untuk item samping
    const opacity = interpolate(
      animationValue.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
    );

    // Efek skala untuk memperbesar item tengah
    const scale = interpolate(
      animationValue.value,
      [index - 1, index, index + 1],
      [0.9, 1, 0.9],
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.itemContainer}>
      <Animated.View style={[styles.imageContainer, animatedStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.indexContainer}>
          <Text style={styles.indexText}>{item.id}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000', // Warna latar belakang hitam
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  imageContainer: {
    borderRadius: 20,
    height: 200,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  indexContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    left: '45%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: '45%',
  },
  indexText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
  },
});

export default Home;
