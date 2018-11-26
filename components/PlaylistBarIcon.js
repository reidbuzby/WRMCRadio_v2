import React from 'react';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class PlaylistBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name='format-list-bulleted'
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
