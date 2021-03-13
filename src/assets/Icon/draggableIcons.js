import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const size = 20;

export const MoonIcon = () => {
  return <Ionicons name="moon-outline" color={Colors.PRIMARY} size={size} />;
};

export const MenuIcon = () => {
  return (
    <Ionicons name="ellipsis-horizontal" color={Colors.PRIMARY} size={size} />
  );
};
