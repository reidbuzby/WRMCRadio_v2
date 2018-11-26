import React from 'react';
import { Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        type={this.props.type}
      />
    );
  }
}
