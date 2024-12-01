import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'transparent', // Transparent to allow blur effect
    bottom: 0,
    height: 80, // Adjust to match the tab bar height
    left: 0,
    position: 'absolute',
    right: 0,
  },
  tabBarContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
