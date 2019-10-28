import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import {Text, withStyles} from 'react-native-ui-kitten';
import {installed_blueprints} from '../config/installed_blueprints';
import Icon from 'react-native-vector-icons/FontAwesome';

class _SideMenu extends React.Component {
  onMenuItemPressed = item => {
    this.props.navigation.navigate(item.access_route);
  };

  renderIcon = () => (
    <Image
      style={this.props.themedStyle.icon}
      source={require('../assets/images/smallLogo.png')}
    />
  );

  renderMenu = () => installed_blueprints.map(this.renderMenuItem);

  renderMenuItem = item => (
    <TouchableHighlight
      style={this.props.themedStyle.container}
      key={`${item.name}--blueprint-button`}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={this.props.themedStyle.content}>
        <View style={this.props.themedStyle.content}>
          <Icon
            style={this.props.themedStyle.icon}
            name={item.icon_name ? item.icon_name : 'pencil-square-o'}
            size={24}
            color="#F88087"
          />
          <Text category="s1" style={this.props.themedStyle.text}>
            {item.human_name}
          </Text>
        </View>
        <Icon
         
          name="chevron-right"
          size={24}
          color="#F88087"
        />
      </View>
    </TouchableHighlight>
  );

  render = () => (
    <View style={this.props.themedStyle.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[this.props.themedStyle.container, this.props.themedStyle.content]}>
          {this.renderIcon()}
          <Text category="h6" style={this.props.themedStyle.text}>
            Crowdbotics
          </Text>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  );
}

export default SideMenu = withStyles(_SideMenu, theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme['color-basic-400'],
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme['color-basic-400'],
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
  text: {
    color: theme['color-basic-1000'],
  },
}));
