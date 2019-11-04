import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Dimensions, View, TouchableOpacity} from 'react-native';
import {Text, Layout, Button, Input} from 'react-native-ui-kitten';

import {scaleModerate, scaleVertical} from '../../../../utils/scale';
import {styles} from '../styles';
import * as emailAuthActions from '../../redux/actions';
import ErrorBox from '../../../../components/ErrorBox';
import Icon from 'react-native-vector-icons/FontAwesome';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {},
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.goToPasswordRecover = this.goToPasswordRecover.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
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
        source={require('../../../../assets/images/backgroundLoginV1.png')}
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
    const {signInErrors} = this.props;
    if (signInErrors) {
      return <ErrorBox errorText={signInErrors} />;
    }
  }

  submitLogin() {
    const {
      actions: {login},
    } = this.props;

    const {email, password} = this.state;
    // todo add disable buttons on submit
    login({email, password});

    this.setState({email: '', password: ''});
  }

  goToPasswordRecover() {
    const {navigation} = this.props;
    navigation.navigate('RecoverPassword');
  }

  goToSignUp() {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  }

  render() {
    const {email, password} = this.state;
    const {errors} = this.props;

    return (
      <Layout style={styles.screen}>
        {this.renderImage()}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Icon name="twitter" size={20} color="#ED6854" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="google" size={20} color="#ED6854" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="facebook" size={20} color="#ED6854" />
          </TouchableOpacity>
        </View>
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

        <Text
          style={[styles.textRow, styles.boldText]}
          onPress={this.goToPasswordRecover}>
          Forgot password?
        </Text>

        <Button style={styles.actionButon} onPress={this.submitLogin}>
          LOGIN
        </Button>

        <Text style={styles.textRow} onPress={this.goToSignUp}>
          Don't have an account?
          <Text style={[styles.textRow, styles.boldText]}> Sign up now</Text>
        </Text>

        {this.renderErrors()}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  signInErrors: state.EmailAuth.errors.SignIn,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({email, password}) => {
      dispatch(emailAuthActions.login({email, password}));
    },
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
