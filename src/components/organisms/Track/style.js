import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    width: '90%',
  },
  sliderContainer: {
    width: '100%',
  },
  slider: {
    height: 20,
  },
  progress: {
    fontSize: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  progressText: {
    fontSize: 12,
    color: Colors.LIGHT_TEXT,
  },
  controlsContainer: {
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
