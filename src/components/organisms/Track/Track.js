import React, {useContext, useState, useRef, useEffect} from 'react';

import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Slider from '@react-native-community/slider';
import {Colors} from '../../../style/index';
import styles from './style';
import {
  BigPauseIcon,
  BigPlayIcon,
  ForwardIcon,
  BackwardIcon,
} from '../../../assets/Icon/trackIcons';
import {SoundContext} from '../../../context-api/SoundContext';

const Track = (props) => {
  const {state, setState} = useContext(SoundContext);
  const [isSliding, setSliding] = useState(false);
  const [timeState, setTimeState] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const clearTimer = useRef(null);

  useEffect(() => {
    clearTimer.current = setInterval(() => {
      updatePlayTime();
    }, 200);
    return () => {
      clearInterval(clearTimer.current);
    };
  }, [state.sound, state.isPlaying, !isSliding]);
  //!check !isSliding out

  const updatePlayTime = () => {
    if (state.sound && state.isPlaying && !isSliding) {
      state.sound.getCurrentTime((seconds) => {
        setTimeState(seconds);
        setSliderValue(seconds);
      });
    }
  };

  const controlHandler = () => {
    setState({...state, isPlaying: !state.isPlaying});
  };

  const setPlayTime = (seconds) => {
    if (state.sound) {
      setTimeState(seconds);
      state.sound?.setCurrentTime(seconds);
      setSliding(false);
    }
  };

  const seek = (isForward) => {
    if (state.sound && state.duration > 0) {
      let newTime;
      if (isForward) {
        newTime = timeState + 30;
      } else {
        newTime = timeState - 10;
      }
      if (newTime > 0 && newTime <= state.duration) {
        setPlayTime(newTime);
      }
    }
  };

  const getAudioTimeString = (seconds) => {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt((seconds % (60 * 60)) / 60);
    const s = parseInt(seconds % 60);
    return (
      (h < 10 ? '0' + h : h) +
      ':' +
      (m < 10 ? '0' + m : m) +
      ':' +
      (s < 10 ? '0' + s : s)
    );
    // return seconds;
  };

  const durationString =
    state.duration === 0 ? '--:--:--' : getAudioTimeString(state.duration);
  const currentTimeString = getAudioTimeString(timeState);

  const onSliderEditStart = () => {
    setSliding(true);
  };

  const onSliderEditEnd = (value) => {
    setSliderValue(value);
    setSliding(false);
    state.sound?.setCurrentTime(value);
  };

  const onSliderEditing = (value) => {
    setTimeState(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.sliderContainer}>
          <Slider
            minimumValue={0}
            value={sliderValue}
            maximumValue={state.duration}
            thumbTintColor={Colors.PRIMARY}
            maximumTrackTintColor={Colors.LIGHT_TEXT}
            minimumTrackTintColor={Colors.PRIMARY}
            style={styles.slider}
            onValueChange={onSliderEditing}
            onSlidingStart={onSliderEditStart}
            onSlidingComplete={onSliderEditEnd}
          />
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressText}>{currentTimeString}</Text>
          <Text style={styles.progressText}>{durationString}</Text>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => seek(false)}>
          <BackwardIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => controlHandler()} activeOpacity={0.8}>
          {state.isPlaying ? <BigPauseIcon /> : <BigPlayIcon />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => seek(true)}>
          <ForwardIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Track;
