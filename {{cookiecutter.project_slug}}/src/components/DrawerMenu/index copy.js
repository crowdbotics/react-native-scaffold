import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, StyleSheet, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import {
  RkStyleSheet,
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import { FontAwesome } from '../../assets/icons';


class DrawerMenu extends Component {


  onMenuItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/smallLogo.png') : require('../../assets/images/smallLogoDark.png')
  );

  renderIcon = () => (
    <Image style={styles.icon} source={this.getThemeImageSource(RkTheme.current)} />
  );

  menuItemPressed = (index) => async () => {
    switch (index) {
      case 0:
        this.props.navigation.navigate('profile');
        break;
      
      default:
        break;
    }
  };

  renderMenu = () => MainRoutes.map(this.renderMenuItem);

  renderMenuItem = (item) => (
    <TouchableHighlight
      style={styles.container}
      key={item.id}
      underlayColor={RkTheme.current.colors.button.underlay}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <RkText
            style={styles.icon}
            rkType='moon primary xlarge'>{item.icon}
          </RkText>
          <RkText>{item.title}</RkText>
        </View>
        <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
      </View>
    </TouchableHighlight>
  );

  render = () => (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.content]}>
          {this.renderIcon()}
          <RkText rkType='logo'>Crowdbotics</RkText>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  )


  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <TouchableHighlight
  //         style={styles.menuItem}
  //         onPress={this.menuItemPressed(0)}
  //       >
  //         <Text style={styles.menuText}> Profile </Text>
  //       </TouchableHighlight>
        
  //     </View>
  //   );
  // }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
}));

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingLeft: 20,

//   },
//   menuItem: {
//     marginBottom: 20
//   },
//   menuText: {
//     fontSize: 18,
//     color: 'blue'
//   }
// });

// DrawerMenu.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
//   currentScreen: PropTypes.string
// };

export default DrawerMenu;
