import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Listen from '../screens/Listen/Listen';
import Settings from '../screens/Settings/Settings';
import Onboarding from '../screens/Onboarding/Onboarding';
import StartUp from '../screens/StartUp/StartUp';
import HomeIcon from '../assets/Icon/home';
import SettingsIcon from '../assets/Icon/settings';
import ListenIcon from '../assets/Icon/listen';
import styles from './style';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Tab" component={MyTab} />
      <Stack.Screen name="Listen" component={Listen} />
    </Stack.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator barStyle={styles.barStyle} shifting={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: 'Listen',
          tabBarIcon: ({color}) => <ListenIcon color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <SettingsIcon color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyStack;
