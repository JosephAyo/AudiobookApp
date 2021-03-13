import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const onShare = async (filePath) => {
  try {
    const shareResponse = await Share.open({
      title: 'Share Audio Book',
      url: 'file://' + filePath,
    });
    console.log('shareResponse', shareResponse);
  } catch (error) {
    console.log('error', error);
    alert(error.message);
  }
};

export {onShare};
