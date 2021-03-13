import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../style/index';

const size = 25;
export const WindLibrary = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Feather name="wind" color={Colors.LIGHT_TEXT} size={size} />
      <Text> </Text>
      <Ionicons name="library-outline" color={Colors.LIGHT_TEXT} size={size} />
    </View>
  );
};
