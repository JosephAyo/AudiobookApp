import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../style/index';

const size = 30;
const ShareIcon = () => {
  return <Entypo name="share" color={Colors.PRIMARY} size={size} />;
};

export default ShareIcon;
