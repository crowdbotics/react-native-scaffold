import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Dimensions} from 'react-native';
import {Text, Layout, Button, Input} from 'react-native-ui-kitten';

import {scaleModerate} from '../../../../utils/scale';
import {styles} from '../styles';
import * as emailAuthActions from '../../redux/actions';
import ErrorBox from '../../../../components/ErrorBox';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {},
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(500, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={require('../../../../assets/images/backgroundLoginV1DarkTheme.png')}
      />
    );
  };

  handleEmailChange(email) {
    this.setState({email});
    // todo add email validation
  }

  handlePasswordChange(password) {
    this.setState({password});
    // todo change keyboard and add validation
  }

  renderErrors() {
    const {signUpErrors} = this.props;
    if (signUpErrors) {
      return <ErrorBox errorText={signUpErrors} />;
    }
  }

  submitSignUp() {
    const {
      actions: {signUp},
    } = this.props;

    const {email, password} = this.state;
    // todo add disable buttons on submit
    signUp({email, password});

    this.setState({email: '', password: ''});
  }

  render() {
    const {email, password} = this.state;
    const {errors} = this.props;

    return (
      <Layout style={styles.screen}>
        {this.renderImage()}
        <Input
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder="Email"
          size="large"
          style={styles.input}
          keyboardType="email-address"
          textStyle={styles.text}
          autoCapitalize="none"
        />
        <Input
          value={password}
          onChangeText={this.handlePasswordChange}
          placeholder="Password"
          size="large"
          style={styles.input}
          secureTextEntry={true}
          textStyle={styles.text}
          autoCapitalize="none"
        />

        <Button style={styles.actionButon} onPress={this.submitSignUp}>
          Sign up
        </Button>

        {this.renderErrors()}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  signUpErrors: state.EmailAuth.errors.SignUp,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    signUp: ({email, password}) => {
      dispatch(emailAuthActions.signUp({email, password}));
    },
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
