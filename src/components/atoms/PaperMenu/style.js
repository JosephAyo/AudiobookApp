import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    position: 'absolute',
    bottom: 30,
    right: -20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 50,
  },
});

export default styles;
