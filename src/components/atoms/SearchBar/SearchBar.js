import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import SearchIcon from '../../../assets/Icon/search';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputParent}>
        <TextInput placeholder="Search from your library..." />
      </View>
      <View style={styles.searchParent}>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
