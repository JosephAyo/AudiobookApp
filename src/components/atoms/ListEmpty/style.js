import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.HEIGHT * 0.7,
    width: Dimensions.WIDTH,
  },
  emptyText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.LIGHT_TEXT,
  },
});

export default styles;
