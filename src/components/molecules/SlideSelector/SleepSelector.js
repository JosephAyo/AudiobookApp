import React, {useState, useContext, useRef, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {PointerIcon} from '../../../assets/Icon/slideSelection';
import {SoundContext} from '../../../context-api/SoundContext';
import {TimerContext} from '../../../context-api/TimerContext';
import {
  PlayIcon,
  StopIcon,
  CloseIcon,
} from '../../../assets/Icon/slideSelection';

const data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100];
const SleepSelector = (props) => {
  const {} = useContext(SoundContext);
  const {setIsSet, isSet, setSleep} = useContext(TimerContext);
  const [sleepTime, setSleepTime] = useState(30);
  const flatListRef = useRef(null);
  const onViewRef = useRef((info) => {
    const currentItem = info.viewableItems[0];
    if (currentItem) {
      setSleepTime(currentItem.item);
    }
  });

  const viewabilityConfig = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
  });

  const startSleepHandler = () => {
    setSleep(sleepTime);
    setIsSet(true);
    props.sleepSet();
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderView}>
        <View style={styles.currentValue}>
          <Text style={styles.currentValueText}>{sleepTime} mins</Text>
          <PointerIcon />
        </View>
        <FlatList
          ref={flatListRef}
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
          getItemLayout={(data, index) => ({
            length: 75,
            offset: 75 * index,
            index,
          })}
          initialScrollIndex={5}
        />
        <LinearGradient
          locations={[0, 0.5, 1.0]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFFFFFF2', '#00000000', '#FFFFFFF2']}
          style={styles.linearGradient}></LinearGradient>
      </View>
      <TouchableOpacity
        onPress={() => startSleepHandler()}
        activeOpacity={0.6}
        style={[styles.sleepOption, styles.closePrecursor]}>
        {isSet ? <StopIcon /> : <PlayIcon />}
        <Text style={styles.slideOptionText}>{isSet ? ' Stop' : ' Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.onClose()}
        style={styles.sleepOption}>
        <Text style={styles.slideOptionText}>
          <CloseIcon /> Close
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SleepSelector;
