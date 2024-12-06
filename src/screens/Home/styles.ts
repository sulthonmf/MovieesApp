import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000', // Warna latar belakang hitam
    flex: 1,
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
