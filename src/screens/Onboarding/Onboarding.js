import React, {useState} from 'react';

import {Text, View} from 'react-native';

import Swiper from 'react-native-swiper';
import {Colors} from '../../style/index';
import SlideOne from '../../assets/Icon/slideOne';
import SlideTwo from '../../assets/Icon/slideTwo';
import SlideThree from '../../assets/Icon/slideThree';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import {createDir} from '../../services/fileSystem';
import {boardApp} from '../../functions/board';

const Onboarding = ({navigation}) => {
  const handleNavigation = async () => {
    await createDir();
    await boardApp();
    navigation.navigate('Tab');
  };
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      scrollEnabled={false}
      showsButtons={true}
      paginationStyle={{
        width: '60%',
        marginHorizontal: '20%',
        justifyContent: 'space-around',
        // top: 400,
      }}
      buttonWrapperStyle={{
        top: 27,
        position: 'absolute',
        height: 25,
        width: '90%',
        marginHorizontal: '5%',
      }}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      nextButton={<Text style={styles.text}>Next</Text>}
      prevButton={<Text style={styles.text}>Previous</Text>}>
      <View style={styles.slide1}>
        <SlideOne style={styles.slide1Background} />
        <View style={styles.titleParent}>
          <Text style={styles.text}>DOWNLOAD</Text>
        </View>
      </View>
      <View style={styles.slide1}>
        <SlideTwo style={styles.slide2Background} />
        <View style={styles.titleParent}>
          <Text style={styles.text}>ADD</Text>
        </View>
      </View>
      <View style={styles.slide1}>
        <SlideThree style={styles.slide3Background} />
        <View style={styles.titleParent}>
          <View>
            <Text style={styles.text}>LISTEN & ENJOY</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleNavigation()}
            activeOpacity={0.6}>
            <View style={styles.continueButton}>
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

export default Onboarding;
