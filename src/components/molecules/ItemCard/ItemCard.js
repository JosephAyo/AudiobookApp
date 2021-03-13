import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import HeartedIcon from '../../../assets/Icon/hearted';
import HeartedNotIcon from '../../../assets/Icon/heartedNot';
const ItemCard = (props) => {
  const [isHearted, setHearted] = useState(false);
  const handleHeart = () => {
    setHearted(!isHearted);
  };
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <LinearGradient
          colors={['#F1F1F1', '#F8F8F8', '#FFFFFF']}
          style={styles.container}>
          <View style={styles.imageParent}>
            <Image
              style={styles.cardImage}
              source={require('../../../assets/image/klipartz.com.png')}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={[styles.titleContainer, styles.infoContainerChild]}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {props.data.item.name}
              </Text>
            </View>
            <View style={[styles.metaContainer, styles.infoContainerChild]}>
              <View style={styles.progressContainer}>
                <Text>80%</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleHeart()}
                activeOpacity={0.8}>
                <View style={styles.favoriteContainer}>
                  {isHearted ? <HeartedIcon /> : <HeartedNotIcon />}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
