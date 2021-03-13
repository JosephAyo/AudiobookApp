import React, {useState, useEffect, useContext, useRef} from 'react';
import {Text, View} from 'react-native';
import {SoundContext} from '../../../context-api/SoundContext';
import {TimerContext} from '../../../context-api/TimerContext';
import {convertToMilliseconds, getTimeString} from '../../../functions/sleep';
import styles from './style';

const Countdown = (props) => {
  const {
    countdown,
    setCountdown,
  } = useContext(TimerContext);
  return (
    <View>
      <Text style={[styles.counter, {fontSize: props.fontSize || 15}]}>
        {getTimeString(countdown)}
      </Text>
    </View>
  );
};

export default Countdown;
