import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../style/index';

const size = 30;

export const ImportIcon = () => {
  return (
    <MaterialCommunityIcons name="import" color={Colors.PRIMARY} size={size} />
  );
};
