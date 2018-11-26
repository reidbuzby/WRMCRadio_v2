import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import PlaylistBarIcon from '../components/PlaylistBarIcon';
import SoundBarIcon from '../components/SoundBarIcon';
import RadioStream from '../screens/RadioStream';
import PlaylistScreen from '../screens/PlaylistScreen';

const HomeStack = createStackNavigator({
  Home: RadioStream,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Radio',
  tabBarIcon: ({ focused }) => (
    <SoundBarIcon
      focused={focused}
    />
  ),
};

const PlaylistStack = createStackNavigator({
  Links: PlaylistScreen,
});

PlaylistStack.navigationOptions = {
  tabBarLabel: 'Playlists',
  tabBarIcon: ({ focused }) => (
    <PlaylistBarIcon
      focused={focused}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  PlaylistStack,
});
