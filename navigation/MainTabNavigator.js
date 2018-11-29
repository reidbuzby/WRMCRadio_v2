import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import PlaylistBarIcon from '../components/PlaylistBarIcon';
import SoundBarIcon from '../components/SoundBarIcon';
import RadioStream from '../screens/RadioStream';
import PlaylistScreen from '../screens/PlaylistScreen';
import LinksScreen from '../screens/LinksScreen';

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
  tabBarOptions: {
    style: {
      backgroundColor: '#E390BD',
    },
    labelStyle:{
      color: '#000',
    }
  }
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Playlists',
  tabBarIcon: ({ focused }) => (
    <PlaylistBarIcon
      focused={focused}
    />
  ),
  tabBarOptions: {
   style: {
     backgroundColor: '#E390BD',
   },
   labelStyle:{
     color: '#000',
   }
 }
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
