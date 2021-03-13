import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10.5,
    width: 343,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    height: 65,
    paddingHorizontal: 5,
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageParent: {
    flex: 1,
  },
  cardImage: {
    width: 65,
    height: 65,
  },
  infoContainer: {
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingTop: 10,
    flex: 2,
  },
  titleContainer: {
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  metaContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  progressContainer: {
    alignSelf: 'center',
  },
  favoriteContainer: {
    alignSelf: 'center',
  },
});

export default styles;
