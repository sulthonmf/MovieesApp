import type { RootScreenProps } from '@/navigation/types';

import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TimedSlideshow from 'react-native-timed-slideshow';

import { Paths } from '@/navigation/paths';

import { Button } from '@/components/atoms';

import { styles } from './styles';

const Landing = ({ navigation }: RootScreenProps<Paths.Landing>) => {
  const [moviePosters, setMoviePosters] = useState([]);

  // Fetch random movie posters
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
        );
        const data = await response.json();

        const randomMovies = data.results
          .slice(0, 10) // Ambil 10 film pertama
          .map((movie: any) => ({
            text: movie.overview,
            title: movie.title,
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }));

        setMoviePosters(randomMovies);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const renderFooterItem = () => {
    return (
      <>
        <View style={styles.footerContainer}>
          <Text style={styles.titleFooterText}>
            {`Welcome to Moviees, Login to your account to start your experience`}
          </Text>
        </View>
        <View style={styles.footer}>
          <Button
            fullWidth={true}
            onPress={() =>
              navigation.navigate(Paths.AuthStack, {
                screen: Paths.Login,
              })
            }
          >
            Login
          </Button>
          <Button
            fullWidth={true}
            onPress={() =>
              navigation.navigate(Paths.MainTabs, {
                screen: Paths.Home,
              })
            }
            type="tertiary"
          >
            Continue as Guest
          </Button>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {/* Slideshow Section */}
      <View style={styles.slideshowContainer}>
        {moviePosters.length > 0 ? (
          <TimedSlideshow
            footerStyle={{
              height: 300,
            }}
            items={moviePosters}
            renderCloseIcon={() => {}}
            renderFooter={renderFooterItem}
            showProgressBar={false}
          />
        ) : (
          <Text style={styles.loadingText}>Loading movie posters...</Text>
        )}
      </View>
    </View>
  );
};

export default Landing;
