import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import PlaylistBarIcon from '../components/PlaylistBarIcon';
import SoundBarIcon from '../components/SoundBarIcon';
import RadioStream from '../screens/RadioStream';
import ScheduleScreen from '../screens/ScheduleScreen';
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
  tabBarOptions: {
    style: {
      backgroundColor: '#E390BD',
      height: 45
    },
    labelStyle:{
      color: '#000',
    }
  }
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
  tabBarOptions: {
   style: {
     backgroundColor: '#E390BD',
   },
   labelStyle:{
     color: '#000',
   }
 }
};

const ScheduleStack = createStackNavigator({
  Links: ScheduleScreen,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
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
  PlaylistStack,
  ScheduleStack,
});
