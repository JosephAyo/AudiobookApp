import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  screenHeader: {
    marginVertical: 10,
    width: 343,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  screenTitleContainer: {
    flex: 4,
    alignItems: 'center',
  },
  screenTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerButtonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'relative',
  },
  contentContainer: {
    paddingBottom: 150,
  },
  panelContainer: {
    marginTop: 20,
    overflow: 'hidden',
  },
  panelTouchable: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  panelImage: {
    width: 290,
    height: 290,
  },
  titleContainer: {
    marginTop: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderSelectorParent: {
    overflow: 'hidden',
  },
  sliderSelectorContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    height: 350,
  },
  scrollPicker: {
    height: 250,
    justifyContent: 'center',
  },
  counting: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCounter: {
    height: '60%',
    justifyContent: 'center',
    marginBottom: 4,
  },
  slideCaptionParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  slideCaption: {
    fontSize: 25,
    textAlign: 'center',
  },
  slideValue: {
    fontSize: 5,
    fontWeight: 'bold',
  },
  sleepOption: {
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  optionsContainer: {
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    // marginBottom: 10,
    position: 'absolute',
    bottom: 10,
  },
});

export default styles;
