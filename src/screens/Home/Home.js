import React, {useEffect, useState, useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  Text,
  StatusBar,
  SafeAreaView,
  Alert,
  BackHandler,
  FlatList,
} from 'react-native';
import keygen from 'keygenerator';
import styles from './style';
import SearchBar from '../../components/atoms/SearchBar/SearchBar';
import ListEmpty from '../../components/atoms/ListEmpty/ListEmpty';
import ItemCard from '../../components/molecules/ItemCard/ItemCard';
import {readDir} from '../../services/fileSystem';
import {SoundContext} from '../../context-api/SoundContext';

const Home = (props) => {
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const [isResolved, setResolve] = useState(true);
  const {audios, setAudios} = useContext(SoundContext);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    async function fetchData() {
      const dir = await readDir();
      if (dir) setAudios(dir.files);
      setLoading(false);
      setResolve(false);
    }
    if (isResolved) fetchData();
  }, [isResolved]);

  useEffect(() => {
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    }
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isFocused]);

  const handleItemPress = async () => {
    props.navigation.navigate('Listen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="default" />
      <SearchBar />
      <FlatList
        data={audios}
        renderItem={(item) => (
          <ItemCard data={item} onPress={() => handleItemPress()} />
        )}
        ListEmptyComponent={<ListEmpty />}
        keyExtractor={() => keygen._()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
