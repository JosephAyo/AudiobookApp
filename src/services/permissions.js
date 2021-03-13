import React from 'react';
import {ToastAndroid, PermissionsAndroid} from 'react-native';

const checkPermissions = async () => {
  const [readGranted, writeGranted] = await Promise.all([
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ),
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ),
  ]);

  if (!readGranted || !writeGranted) return false;
  return true;
};

const requestPermissions = async () => {
  const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]);
  if (granted) return true;
  return false;
};

export {checkPermissions, requestPermissions};
