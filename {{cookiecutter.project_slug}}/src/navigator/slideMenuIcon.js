import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-ui-kitten';

export class SlideMenuIcon extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name="menu-outline"
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
