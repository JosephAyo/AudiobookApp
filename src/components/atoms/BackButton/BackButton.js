import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BackIcon from '../../../assets/Icon/back';
const BackButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <BackIcon />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
