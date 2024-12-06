import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  activeItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: screenWidth - 30, // lebih tinggi untuk item yang aktif },
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  image: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ android: 1, ios: 0 }),
  }, // Mencegah masalah rendering pada Android
  item: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: screenWidth - 60,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    width: screenWidth - 60,
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
