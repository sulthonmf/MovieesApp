import type { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';

import React from 'react';
import { ScrollView, View } from 'react-native';

import {
  CurrentShowing,
  HomeBanner,
  PopularShowing,
} from '@/components/templates';

import { styles } from './styles';

function Home({ navigation }: RootScreenProps<Paths.Home>) {
  const entries = [
    { backgroundColor: '#ff00ff', title: 'Temukan Film Favorit-mu' },
    { backgroundColor: '#00ffff', title: 'Berikan ulasan film yang kamu suka' },
    {
      backgroundColor: '#ffbd59',
      title: 'Tambahkan film ke daftar play-list kamu',
    },
  ];

  const movies = [
    {
      rating: 5,
      title: 'Star Wars: The Last Jedi',
      uri: 'https://picsum.photos/seed/starwars/200/300',
    },
    {
      rating: 5,
      title: 'Fast & Furious 9',
      uri: 'https://picsum.photos/seed/fastfurious/200/300',
    },
    {
      rating: 5,
      title: 'Another Movie',
      uri: 'https://picsum.photos/seed/anothermovie/200/300',
    },
    {
      rating: 5,
      title: 'Star Wars: The Last Jedi',
      uri: 'https://picsum.photos/seed/starwars/200/300',
    },
    {
      rating: 5,
      title: 'Fast & Furious 9',
      uri: 'https://picsum.photos/seed/fastfurious/200/300',
    },
    {
      rating: 5,
      title: 'Another Movie',
      uri: 'https://picsum.photos/seed/anothermovie/200/300',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        {/* <MyCarousel data={entries} /> */}
        <HomeBanner entries={entries} />
        <View>
          <CurrentShowing movies={movies} />
        </View>
        <View>
          <PopularShowing movies={movies} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
