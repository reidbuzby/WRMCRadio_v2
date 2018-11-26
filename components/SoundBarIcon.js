import React from 'react';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class SoundBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name='headset'
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
