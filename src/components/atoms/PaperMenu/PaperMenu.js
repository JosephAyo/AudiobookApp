import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import ShareIcon from '../../../assets/Icon/share';
const PaperMenu = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.onSharePress()}>
        <View style={styles.menuItem}>
          <ShareIcon />
          <Text>{"    "}Share</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaperMenu;
