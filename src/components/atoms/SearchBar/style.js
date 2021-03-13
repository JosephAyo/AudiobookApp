import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: Dimensions.WIDTH * 0.8,
    backgroundColor: Colors.WHITE,
    elevation: 10,
    borderColor: Colors.BORDER_ONE,
    borderRadius: 11,
    height: 51,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputParent: {
    width: '90%',
  },
  searchParent: {
    width: '10%',
    alignItems: 'center',
  },
});

export default styles;
