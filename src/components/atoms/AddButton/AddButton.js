import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ImportIcon} from '../../../assets/Icon/import';
import styles from './style';
const AddButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <ImportIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
