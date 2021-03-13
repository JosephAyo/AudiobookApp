import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import HeartedIcon from '../../../assets/Icon/hearted';
import HeartedNotIcon from '../../../assets/Icon/heartedNot';
import TextTicker from 'react-native-text-ticker';

const ItemCard = (props) => {
  const [isHearted, setHearted] = useState(false);
  const handleHeart = () => {
    setHearted(!isHearted);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.onPress(props.data.item)}>
        <View style={styles.itemContainer}>
          <View style={styles.imageParent}>
            <Image
              style={styles.cardImage}
              source={require('../../../assets/image/klipartz.com.png')}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <TextTicker
                style={styles.title}
                animationType="scroll"
                marqueeDelay={3000}
                repeatSpacer={20}
                bounce={false}>
                {props.data.item.name}
              </TextTicker>
            </View>
          </View>
          <View style={styles.metaContainer}>
            <View style={styles.progressContainer}>
              <Text>80%</Text>
            </View>
            <View style={styles.favoriteContainer}>
              <TouchableOpacity
                onPress={() => handleHeart()}
                activeOpacity={0.8}>
                {isHearted ? <HeartedIcon /> : <HeartedNotIcon />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
