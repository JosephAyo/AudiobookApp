import React, {useState, useContext, useRef, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {PointerIcon} from '../../../assets/Icon/slideSelection';
import {SoundContext} from '../../../context-api/SoundContext';
import {CloseIcon} from '../../../assets/Icon/slideSelection';
const data = [
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1.0,
  1.1,
  1.2,
  1.4,
  1.6,
  1.8,
  2.0,
  2.2,
  2.4,
  2.6,
  2.8,
  3.0,
];

const jumpPoints = [0.6, 1.0, 1.2, 1.6, 2.0];

const SpeedSelector = (props) => {
  const {state} = useContext(SoundContext);
  const [speed, setSpeed] = useState(props.initialSpeed);
  let flatListRef = useRef(null);
  const onViewRef = useRef((info) => {
    const {viewableItems} = info;
    if (viewableItems[0]) {
      setSpeed(viewableItems[0].item);
    }
  });
  const viewabilityConfig = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
  });

  useEffect(() => {
    // ? why you have to create a custom panel is that state management isn't good
    // ? with this current library
    goToHandler(props.initialSpeed);
  }, []);

  useEffect(() => {
    if (state.sound) state.sound.setSpeed(speed);
  }, [speed]);

  const goToHandler = (value) => {
    setSpeed(value);
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: data.indexOf(value),
      });
    }, 300);
  };
  return (
    <View>
      <View style={styles.sliderView}>
        <View style={styles.currentValue}>
          <Text style={styles.currentValueText}>{speed} x</Text>
          <PointerIcon />
        </View>
        <FlatList
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => props.onPress(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewabilityConfig.current}
          contentContainerStyle={{
            paddingHorizontal: '37%',
          }}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(data, index) => {
            return {
              length: 75,
              offset: 75 * index,
              index,
            };
          }}
          initialScrollIndex={5}
        />
        <LinearGradient
          locations={[0, 0.5, 1.0]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFFFFFF2', '#00000000', '#FFFFFFF2']}
          style={styles.linearGradient}></LinearGradient>
      </View>
      <View style={[styles.jumpView, styles.closePrecursor]}>
        <FlatList
          data={jumpPoints}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => goToHandler(item)}>
              <View style={styles.jumpItem}>
                <Text style={styles.jumpItemText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.onClose(speed)}
        style={styles.sleepOption}>
        <Text style={styles.slideOptionText}>
          <CloseIcon /> Close
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpeedSelector;
