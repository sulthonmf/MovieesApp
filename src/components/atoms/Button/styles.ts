import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  link: {
    backgroundColor: 'transparent',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
  },
  outlinedText: {
    color: 'black',
  },
  primary: {
    backgroundColor: '#ffbd59',
  },
  primaryText: {
    color: 'black',
    fontWeight: 'bold'
  },
  secondary: {
    backgroundColor: 'black',
  },
  secondaryText: {
    color: 'white',
    fontWeight: 'bold'
  },
  tertiary: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  tertiaryText: {
    color: 'black',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
  },
});
