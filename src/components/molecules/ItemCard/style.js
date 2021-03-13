import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10.5,
    width: 158,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    borderRadius: 20,
    height: 220,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  infoContainerChild: {
    marginVertical: 5,
  },
  imageParent: {},
  cardImage: {
    width: 138,
    height: 138,
  },
  titleContainer: {},
  title: {
    fontWeight: 'bold',
  },
  metaContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  progressContainer: {},
  favoriteContainer: {},
});

export default styles;
