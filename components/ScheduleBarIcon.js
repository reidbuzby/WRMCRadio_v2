import React from 'react';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class ScheduleBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name='date-range'
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
