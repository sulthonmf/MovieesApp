import type { RootScreenProps } from '@/navigation/types';

import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
 
import TimedSlideshow from 'react-native-timed-slideshow';

import { Paths } from '@/navigation/paths';

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
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            {`Welcome to Moviees, Login to your account to start your experience`}
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Paths.AuthStack, {
                screen: Paths.Login,
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Paths.MainTabs, {
                screen: Paths.Home,
              })
            }
            style={styles.buttonGuest}
          >
            <Text style={styles.buttonTextGuest}>Continue as Guest</Text>
          </TouchableOpacity>
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
