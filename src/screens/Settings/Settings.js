import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Alert,
  BackHandler,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import styles from './style';

const Settings = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Settings coming soon...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
