import {StyleSheet} from 'react-native';
import {Colors} from '../../style/index';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: Colors.PRIMARY,
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: Colors.PRIMARY,
    width: 25,
    height: 15,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: Colors.PRIMARY,
    width: 85,
    height: 15,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  slide1Background: {
    position: 'absolute',
    top: 128,
    left: 3,
    right: 0,
    bottom: 0,
  },
  slide2Background: {
    position: 'absolute',
    top: 128,
    left: 102.34,
    right: 0,
    bottom: 0,
  },
  slide3Background: {
    position: 'absolute',
    top: 126,
    left: 8,
    right: 0,
    bottom: 0,
  },
  titleParent: {
    position: 'absolute',
    top: 486,
    left: 3,
    right: 0,
    bottom: 0,
  },
  continueButton: {
    marginTop: 30,
    borderRadius: 20,
    width: 300,
    height: 40,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  continueButtonText: {color: Colors.WHITE, alignSelf: 'center'},
});

export default styles;
