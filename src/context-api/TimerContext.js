import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';
import {SoundContext} from './SoundContext';
import {convertToMilliseconds} from '../functions/sleep';

export const TimerContext = createContext();
export const TimerProvider = (props) => {
  const {state, setState} = useContext(SoundContext);
  const [tempTime, setTempTime] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [sleep, setSleep] = useState(30);
  let clearCountdown = useRef(null);

  useEffect(() => {
    if (isSet) {
      setTempTime(Date.now());
      setCountdown(convertToMilliseconds(sleep));
    } else {
      triggerSleepStop(true);
    }
  }, [isSet, sleep]);

  useEffect(() => {
    if (isSet) {
      clearCountdown.current = setInterval(() => {
        updateCountdown();
      }, 800);
    }
    return () => {
      clearInterval(clearCountdown.current);
    };
  }, [countdown, isSet]);

  const updateCountdown = () => {
    if (isSet) {
      setIsCounting(true);
      const diff = Date.now() - tempTime;
      setTempTime(Date.now());
      if (countdown - diff > 0) {
        setCountdown(countdown - diff);
      } else {
        triggerSleepStop();
      }
    }
  };

  const triggerSleepStop = (isSoft = false) => {
    setCountdown(0);
    clearInterval(clearCountdown.current);
    setSleep(30);
    setIsSet(false);
    if (!isSoft) setState({...state, isPlaying: false});
  };

  return (
    <TimerContext.Provider
      value={{
        countdown,
        setCountdown,
        isCounting,
        setIsCounting,
        isSet,
        setIsSet,
        sleep,
        setSleep,
      }}>
      {props.children}
    </TimerContext.Provider>
  );
};
