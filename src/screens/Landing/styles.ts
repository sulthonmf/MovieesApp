import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF0303',
    borderRadius: 8,
    height: height / 17,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 1.2
  },
  buttonGuest: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    height: height / 17,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 1.2
  },
  buttonSignUp: {
    backgroundColor: '#2E3840',
    borderRadius: 8,
    height: height / 17,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 1.2
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextGuest: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextSignUp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    // backgroundColor: '#1a1a1a',
    flex: 2,
    // flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  slideshowContainer: {
    alignItems: 'center',
    flex: 8,
    justifyContent: 'center',
  },
});