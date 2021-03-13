import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {WindLibrary} from '../../../assets/Icon/windLibrary';
const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <WindLibrary />
      <Text style={styles.emptyText}>Your library is empty.</Text>
    </View>
  );
};

export default ListEmpty;
