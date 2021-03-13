import React, {createContext, useState, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import Sound from 'react-native-sound';
export const SoundContext = createContext();
import {convertToMilliseconds} from '../functions/sleep';

export const SoundProvider = (props) => {
  const [name, setName] = useState('Ayo');
  const [audios, setAudios] = useState(null);
  const [state, setState] = useState({
    sound: null,
    isPlaying: false,
    playing: null,
    url: null,
    duration: 0,
  });

  useEffect(() => {
    if (state.isPlaying) {
      handlePlay();
    } else {
      triggerPause();
    }
  }, [state.isPlaying, state.playing]);

  const handlePlay = () => {
    if (!state.sound) {
      loadNewSound();
    } else {
      triggerPlay();
    }
  };
  const loadNewSound = () => {
    const sound = new Sound(state.url, null, (error) => {
      if (error) {
        Alert.alert('Notice', 'audio file error. (Error code : 1)');
      } else {
        setState({
          ...state,
          sound: sound,
          duration: sound.getDuration() > 0 ? sound.getDuration() : 0,
        });
        sound.play((success) => playComplete(success));
      }
    });
  };
  const triggerPlay = () => {
    if (state.sound) {
      state.sound.play((success) => playComplete(success));
    }
  };

  const triggerPause = () => {
    if (state.sound) {
      state.sound.pause((success) => console.log('sound paused'));
    }
  };

  const stopAndRelease = () => {
    if (state.sound) {
      state.sound.stop(() => console.log('stopped'));
      state.sound.release();
    }
  };
  const playComplete = (success) => {
    if (state.sound) {
      if (success) {
      } else {
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
    }
    setState({...state, isPlaying: false});
  };

  return (
    <SoundContext.Provider
      value={{
        name,
        setName,
        audios,
        setAudios,
        state,
        setState,
        handlePlay,
        stopAndRelease,
        loadNewSound,
      }}>
      {props.children}
    </SoundContext.Provider>
  );
};
