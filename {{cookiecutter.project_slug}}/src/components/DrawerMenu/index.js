import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


class DrawerMenu extends Component {
  menuItemPressed = (index) => async () => {
    switch (index) {
      case 0:
        this.props.navigation.navigate('profile');
        break;
      
      default:
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={this.menuItemPressed(0)}
        >
          <Text style={styles.menuText}> Profile </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,

  },
  menuItem: {
    marginBottom: 20
  },
  menuText: {
    fontSize: 18,
    color: 'blue'
  }
});

DrawerMenu.propTypes = {
  navigation: PropTypes.object,
  currentScreen: PropTypes.string
};

export default DrawerMenu;
