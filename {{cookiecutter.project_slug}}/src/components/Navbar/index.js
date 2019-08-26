import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Navbar extends Component {
  render() {
    let { left, right, leftHandler, rightHandler, title } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {left && (
            <TouchableOpacity style={styles.btn} onPress={leftHandler}>
              <Ionicons name={left} style={styles.left} size={24} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightContainer}>
          {right && (
            <TouchableOpacity style={styles.btn} onPress={rightHandler}>
              <Text style={styles.right}>{right}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    height: 44,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  leftContainer: {
    width: 60,
    alignItems: 'flex-start'
  },
  btn: {
    padding: 5
  },
  left: {
    fontSize: 22
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  rightContainer: {
    width: 60,
    alignItems: 'flex-end'
  },
  right: {
    fontSize: 14,
    fontWeight: '600'
  }
});

Navbar.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  title: PropTypes.string,
  leftHandler: PropTypes.func,
  rightHandler: PropTypes.func
};

export default Navbar;
