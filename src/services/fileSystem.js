import React from 'react';
import {ToastAndroid, PermissionsAndroid} from 'react-native';
import RNFS from 'react-native-fs';
import {checkPermissions, requestPermissions} from './permissions';
import {pickFile} from './filePicker';

const AppFolder = 'AudioBooks';

const createDir = async () => {
  const exists = await checkDirExistence();
  if (!exists) {
    const isPermitted = await checkPermissions();
    if (!isPermitted) {
      ToastAndroid.showWithGravity(
        'Permissions not granted',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      await requestPermissions();
    }
    const DirectoryPath = RNFS.ExternalStorageDirectoryPath + '/' + AppFolder;
    RNFS.mkdir(DirectoryPath);
  }
  return true;
};

const checkDirExistence = async () => {
  const exists = await RNFS.exists(
    RNFS.ExternalStorageDirectoryPath + '/' + AppFolder,
  );
  if (exists) return true;
  return false;
};

const importAudio = async () => {
  try {
    const createdDir = await createDir();
    if (createdDir) {
      const {fileCopyUri, name} = await pickFile();

      const dirResult = await RNFS.copyFile(
        fileCopyUri,
        RNFS.ExternalStorageDirectoryPath + '/' + AppFolder + '/' + name,
      );
      ToastAndroid.showWithGravity(
        'Import successful',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      return true;
    } else {
      ToastAndroid.showWithGravity(
        'Import failed',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      return null;
    }
  } catch (error) {
    console.log('error', error);
    ToastAndroid.showWithGravity(
      'Import failed',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    return null;
  }
};

const readDir = async () => {
  try {
    const exists = await checkDirExistence();
    const isPermitted = await checkPermissions();
    if (!isPermitted) await requestPermissions();
    if (exists) {
      const dirResult = await RNFS.readDir(
        RNFS.ExternalStorageDirectoryPath + '/' + AppFolder,
      );

      const temp = dirResult.filter(
        (dir) => dir.isFile() && dir.name != '.nomedia',
      );
      const totalPages = Math.ceil(temp.length / 10);
      if (temp)
        return {
          files: temp,
          totalPages: totalPages,
        };
      return null;
    }
    return null;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export {readDir, importAudio, createDir};
