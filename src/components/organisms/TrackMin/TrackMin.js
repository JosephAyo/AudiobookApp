import React, {useState, useEffect, useContext, useRef} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {SmallPauseIcon, SmallPlayIcon} from '../../../assets/Icon/trackIcons';
import {SoundContext} from '../../../context-api/SoundContext';

const TrackMin = (props) => {
  const {state, setState} = useContext(SoundContext);
  const [progress, setProgress] = useState(0);

  let clearTimer = useRef(null);

  useEffect(() => {
    clearTimer.current = setInterval(() => {
      updatePlayTime();
    }, 200);
    return () => {
      clearInterval(clearTimer.current);
    };
  }, [state.sound, state.isPlaying]);

  const updatePlayTime = () => {
    if (state.sound && state.isPlaying) {
      state.sound.getCurrentTime((seconds) => {
        if (state.duration > 0) setProgress((seconds / state.duration) * 100);
      });
    }
  };
  const controlHandler = () => {
    setState({...state, isPlaying: !state.isPlaying});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}>
        <View style={styles.itemContainer}>
          <View style={styles.imageParent}>
            <Image
              style={styles.cardImage}
              source={require('../../../assets/image/klipartz.com.png')}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {state.playing}
              </Text>
            </View>
          </View>
          <View style={styles.controlContainer}>
            <TouchableOpacity
              onPress={() => controlHandler()}
              activeOpacity={0.8}>
              {state.isPlaying ? <SmallPauseIcon /> : <SmallPlayIcon />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[styles.progress, {width: progress.toString() + '%'}]}></View>
    </View>
  );
};

export default TrackMin;
