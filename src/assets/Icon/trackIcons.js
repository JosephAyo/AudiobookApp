import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const bigSize = 60;
const mediumSize = 40;
const smallSize = 25;
export const BigPlayIcon = () => {
  return <Ionicons name="play-circle" color={Colors.PRIMARY} size={bigSize} />;
};

export const BigPauseIcon = () => {
  return (
    <Ionicons name="ios-pause-circle" color={Colors.PRIMARY} size={bigSize} />
  );
};

export const SmallPlayIcon = () => {
  return (
    <Ionicons name="ios-play-outline" color={Colors.PRIMARY} size={smallSize} />
  );
};

export const SmallPauseIcon = () => {
  return (
    <Ionicons
      name="ios-pause-outline"
      color={Colors.PRIMARY}
      size={smallSize}
    />
  );
};

export const ForwardIcon = () => {
  return (
    <Ionicons
      name="play-forward-circle"
      color={Colors.PRIMARY}
      size={mediumSize}
    />
  );
};

export const BackwardIcon = () => {
  return (
    <Ionicons
      name="play-back-circle"
      color={Colors.PRIMARY}
      size={mediumSize}
    />
  );
};

