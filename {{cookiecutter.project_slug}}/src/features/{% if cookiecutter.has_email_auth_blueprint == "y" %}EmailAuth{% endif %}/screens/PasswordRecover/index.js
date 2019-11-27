import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Dimensions} from 'react-native';
import {Layout, Button, Input} from 'react-native-ui-kitten';

import {scaleModerate} from '../../../../utils/scale';
import {styles} from '../styles';
import * as emailAuthActions from '../../redux/actions';
import ErrorBox from '../../../../components/ErrorBox';

class PasswordRecover extends Component {
  static navigationOptions = {
    headerMode: 'none',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {email: ''},
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.submitPasswordReset = this.submitPasswordReset.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
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
  }

  renderErrors() {
    const {recoverPasswordErrors} = this.props;
    if (recoverPasswordErrors) {
      return <ErrorBox errorText={recoverPasswordErrors} />;
    }
  }

  submitPasswordReset() {
    const {
      actions: {recoverPassword},
    } = this.props;

    const {email} = this.state;

    recoverPassword(email);
  }

  render() {
    const {email} = this.state;

    return (
      <Layout style={styles.screen}>
        {this.renderImage()}
        <Input
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder="Email"
          size="large"
          style={styles.input}
          textStyle={styles.text}
        />

        <Button style={styles.actionButon} onPress={this.submitPasswordReset}>
          Reset Password
        </Button>

        {this.renderErrors()}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  recoverPasswordErrors: state.EmailAuth.errors.PasswordRecover,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    recoverPassword: email => {
      dispatch(emailAuthActions.resetPassword(email));
    },
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordRecover);
