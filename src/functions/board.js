import AsyncStorage from '@react-native-async-storage/async-storage';

const boardApp = async () => {
  try {
    await AsyncStorage.setItem('isBoarded', 'true');
  } catch (error) {
    console.log('app boarding error', error);
  }
};

const checkBoarded = async () => {
  try {
    const value = await AsyncStorage.getItem('isBoarded');
    return value;
  } catch (error) {
    console.log('app boarding error', error);
    return null;
  }
};

export {boardApp, checkBoarded};
