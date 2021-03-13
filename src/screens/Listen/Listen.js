import React, {useState, useEffect, useContext, useRef} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  RefreshControl,
  Animated,
} from 'react-native';
import keygen from 'keygenerator';
import DraggablePanel from 'react-native-draggable-panel';
import styles from './style';
import ItemCardMin from '../../components/molecules/ItemCardMin/ItemCardMin';
import Track from '../../components/organisms/Track/Track';
import AddButton from '../../components/atoms/AddButton/AddButton';
import BackButton from '../../components/atoms/BackButton/BackButton';
import PaperMenu from '../../components/atoms/PaperMenu/PaperMenu';
import ListEmpty from '../../components/atoms/ListEmpty/ListEmpty';
import TrackMin from '../../components/organisms/TrackMin/TrackMin';
import {MoonIcon, MenuIcon} from '../../assets/Icon/draggableIcons';
import {StopIcon, CloseIcon} from '../../assets/Icon/slideSelection';
import {importAudio, readDir} from '../../services/fileSystem';
import {SoundContext} from '../../context-api/SoundContext';
import {TimerContext} from '../../context-api/TimerContext';
import {onShare} from '../../services/share';
import TextTicker from 'react-native-text-ticker';

import Countdown from '../../components/molecules/Countdown/Countdown';
import SpeedSelector from '../../components/molecules/SlideSelector/SpeedSelector';
import SleepSelector from '../../components/molecules/SlideSelector/SleepSelector';

const aude = [
  {
    name: 'Track 1',
  },
  {
    name: 'Track 2',
  },
];
const Listen = (props) => {
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [speed, setSpeed] = useState(1);

  const [selector, setSelector] = useState(null);

  const {
    name,
    setName,
    audios,
    setAudios,
    state,
    setState,
    stopAndRelease,
  } = useContext(SoundContext);
  const {setIsCounting, isSet, setIsSet, setSleep} = useContext(TimerContext);

  useEffect(() => {
    if (!isFocused && clearTimer.current) {
      clearTimeout(clearTimer.current);
      setLoading(false);
    }
  }, [isFocused]);

  const clearTimer = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const sliderFadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    async function fetchData() {
      const dir = await readDir();
      if (dir) setAudios(dir.files);
      setLoading(false);
    }
    if (!isLoading) fetchData();
  }, [isLoading]);

  const handleAddPress = async () => {
    setLoading(true);

    const imported = await importAudio();
    if (imported) setLoading(false);
    setName('Joe');
  };

  const refreshHandler = () => {
    setLoading(true);
    clearTimer.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleBackPress = async () => {
    props.navigation.goBack();
  };
  const handleItemPress = (audio) => {
    raisePanel();
    if (!state.playing) {
      setState({
        ...state,
        playing: audio.name,
        url: audio.path,
        isPlaying: true,
      });
      setSpeed(1);
    } else if (state.playing != audio.name) {
      stopAndRelease();
      setState({
        ...state,
        playing: audio.name,
        url: audio.path,
        isPlaying: true,
        sound: null,
      });
      setSpeed(1);
    }
  };

  const handlePanelDismiss = () => {
    setPanelVisible(false);
  };

  const raisePanel = () => {
    setPanelVisible(true);
  };

  const closeSlider = (isSpeed = false, value) => {
    // ? why you have to create a custom panel is that state management isn't good
    // ? with this current library
    if (isSpeed) setSpeed(value);
    fadeInTrack();
  };

  const fadeInTrack = () => {
    setSelector(null);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(sliderFadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {});
  };

  const fadeOutTrack = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.4,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(sliderFadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {});
  };

  const handleOptionPress = (option) => {
    fadeOutTrack();
    setSelector(option);
  };

  const stopSleepHandler = () => {
    setSleep(30);
    setIsSet(false);
    setIsCounting(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenHeader}>
        <View
          style={[styles.headerButtonContainer, styles.backButtonContainer]}>
          <BackButton onPress={() => handleBackPress()} />
        </View>
        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitle}>{name}'s Library</Text>
        </View>
        <View style={styles.headerButtonContainer}>
          <AddButton onPress={() => handleAddPress()} />
        </View>
      </View>
      <FlatList
        data={audios}
        renderItem={(item) => (
          <ItemCardMin data={item} onPress={(item) => handleItemPress(item)} />
        )}
        keyExtractor={() => keygen._()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<ListEmpty />}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => refreshHandler()}
          />
        }
      />
      <DraggablePanel
        visible={panelVisible}
        onDismiss={() => handlePanelDismiss()}
        initialHeight={570}
        overlayOpacity={0.2}
        borderRadius={20}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)}
          style={[styles.panelContainer]}>
          <Animated.View
            // pointerEvents={selector ? 'none' : 'auto'}
            style={[
              styles.panelTouchable,
              {
                opacity: fadeAnim,
                translateY: fadeAnim.interpolate({
                  inputRange: [0.4, 1],
                  outputRange: [-290, 0],
                }),
              },
            ]}>
            <Image
              style={styles.panelImage}
              source={require('../../assets/image/klipartz.com.png')}
            />
            <View style={styles.titleContainer}>
              <TextTicker
                style={styles.title}
                animationType="scroll"
                marqueeDelay={3000}
                repeatSpacer={20}
                bounce={false}>
                {state.playing}
              </TextTicker>
            </View>
            <Track />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          // pointerEvents={selector ? 'auto' : 'none'}
          style={[
            styles.sliderSelectorContainer,
            {
              opacity: sliderFadeAnim,
              translateY: fadeAnim.interpolate({
                inputRange: [0.4, 1],
                outputRange: [-280, 300],
              }),
            },
          ]}>
          <View style={styles.slideCaptionParent}>
            <Text style={styles.slideCaption}>
              {selector == 'speed' && 'Playback Speed'}
              {selector == 'sleep' && 'Sleep Timer'}
            </Text>
          </View>
          <View style={styles.scrollPicker}>
            {selector === 'speed' && (
              <SpeedSelector
                initialSpeed={speed}
                onClose={(speed) => closeSlider(true, speed)}
              />
            )}
            {selector === 'sleep' &&
              (isSet ? (
                <View style={styles.counting}>
                  <View style={styles.bigCounter}>
                    <Countdown fontSize={40} />
                  </View>
                  <TouchableOpacity
                    onPress={() => stopSleepHandler()}
                    activeOpacity={0.4}
                    style={[styles.sleepOption, styles.closePrecursor]}>
                    <StopIcon />
                    <Text style={styles.slideOptionText}> Stop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => closeSlider()}
                    style={styles.sleepOption}>
                    <Text style={styles.slideOptionText}>
                      <CloseIcon /> Close
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <SleepSelector
                  onClose={() => closeSlider()}
                  sleepSet={() => fadeInTrack()}
                />
              ))}
          </View>
        </Animated.View>
        <Animated.View
          // pointerEvents={selector ? 'none' : 'auto'}
          style={[
            styles.optionsContainer,
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0.4, 1],
                outputRange: [80, 0],
              }),
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              handleOptionPress('speed');
            }}>
            <Text>{speed}x</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress('sleep')}>
            {isSet ? <Countdown /> : <MoonIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <MenuIcon />
          </TouchableOpacity>
          {menuVisible && <PaperMenu onSharePress={() => onShare(state.url)} />}
        </Animated.View>
      </DraggablePanel>
      {state.playing && <TrackMin onPress={() => raisePanel()} />}
    </SafeAreaView>
  );
};

export default Listen;
