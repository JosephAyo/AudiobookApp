import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const size = 13;

export const CloseIcon = () => {
  return <Ionicons name="close-circle" color={Colors.PRIMARY} size={size} />;
};

export const PlayIcon = () => {
  return (
    <Ionicons name="ios-play-outline" color={Colors.PRIMARY} size={size} />
  );
};

export const StopIcon = () => {
  return (
    <Ionicons name="stop-circle-outline" color={Colors.PRIMARY} size={size} />
  );
};

export const PointerIcon = () => {
  return (
    <Ionicons name="caret-down-outline" color={Colors.PRIMARY} size={size} />
  );
};
