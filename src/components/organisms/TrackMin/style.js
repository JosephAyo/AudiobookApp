import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: 343,
    backgroundColor: Colors.SECONDARY,
    height: 65,
    position: 'absolute',
    bottom: 74,
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
    flex: 3,
  },
  titleContainer: {},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  controlContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    // width: '40%',
  },
});

export default styles;
