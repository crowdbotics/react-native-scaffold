import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Navbar  from '../../components/Navbar';

import styles from './style';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmpswd: ''
    };

    this.props.navigation.addListener('didFocus', this.onFocus);
  }

  onFocus = (payload) => {
    //mock object
    let curUser = {
      displayName: 'Test User',
      email: 'test@crowdbotics.com'
    }

    this.setState({
      displayName: curUser.displayName,
      email: curUser.email,
      password: '',
      confirmpswd: ''
    });
  };

  leftHandler = () => {
    this.props.navigation.goBack();
  };

  rightHandler = async () => {
    if (!this.validate()) {
      return;
    }
    //save profile

  };

  validate = () => {
    let { displayName, password, confirmpswd } = this.state;
    if (!displayName) {
      alert("Name can't be empty!");
      return false;
    }
    if ((!password && confirmpswd) || (password && !confirmpswd)) {
      alert("Password can't be empty!");
      return false;
    }
    if (password !== confirmpswd) {
      alert("Password doesn't match!");
      return false;
    }
    if (password.length < 6 && password.length > 0) {
      alert('Password should be longer than 6 letters!');
      return false;
    }
    return true;
  };

  inputChanged = (key) => (text) => {
    this.setState({ [key]: text });
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Navbar
            left="ios-arrow-back"
            leftHandler={this.leftHandler}
            title="Profile"
            right="Done"
            rightHandler={this.rightHandler}
          />
          <View style={styles.content}>
            <View style={styles.item}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Type name here"
                autoFocus={true}
                autoCapitalize="none"
                value={this.state.displayName}
                onChangeText={this.inputChanged('displayName')}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[styles.input, styles.disabled]}
                autoCapitalize="none"
                editable={false}
                value={this.state.email}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={this.inputChanged('password')}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={this.state.confirmpswd}
                onChangeText={this.inputChanged('confirmpswd')}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}


ProfileScreen.propTypes = {
  navigation: PropTypes.object
};

export default ProfileScreen;
