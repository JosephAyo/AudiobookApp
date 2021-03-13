import {StyleSheet} from 'react-native';
import {Colors} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sliderView: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
    alignSelf: 'center',
  },
  currentValue: {
    position: 'relative',
    bottom: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentValueText: {
    fontWeight: 'bold',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.SUCCESS,
  },
  linearGradient: {
    position: 'absolute',
    width: 300,
    height: 80,
  },
  sleepOption: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    height: 25,
    width: 80,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: Colors.PRIMARY,
  },
  slideOptionText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  closePrecursor: {marginBottom: 80},
  jumpView: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jumpItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    color: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  jumpItemText: {
    fontSize: 12,
    color: Colors.LIGHT_TEXT,
  },
});

export default styles;
