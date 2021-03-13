import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {checkBoarded} from '../../functions/board';
import styles from './style';
import {Colors} from '../../style/index';
import RNBootSplash from 'react-native-bootsplash';

const StartUp = ({navigation}) => {
  useEffect(() => {
    async function checkBoardedHandler() {
      const isBoarded = await checkBoarded();
      if (isBoarded === 'true') navigation.navigate('Tab');
      else navigation.navigate('Onboarding');
    }
    checkBoardedHandler();
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={Colors.PRIMARY} />
    </View>
  );
};

export default StartUp;
