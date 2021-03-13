import DocumentPicker from 'react-native-document-picker';

const pickFile = async () => {
  // Pick a single file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.audio],
    });
    return {fileCopyUri: res.fileCopyUri, name: res.name};
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      console.log('error', err);
    }
    return null;
  }
};

export {pickFile};
