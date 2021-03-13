/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Screen from './src/navigation/index';
import {SoundProvider} from './src/context-api/SoundContext';
import {TimerProvider} from './src/context-api/TimerContext';
import {Colors} from './src/style/index';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.SECONDARY,
    background: Colors.BACKGROUND,
  },
};
const App = () => {
  return (
    <SoundProvider>
      <TimerProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Screen />
          </NavigationContainer>
        </PaperProvider>
      </TimerProvider>
    </SoundProvider>
  );
};

export default App;
