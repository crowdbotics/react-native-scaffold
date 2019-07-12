import React, { Component } from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { Text, Layout, Button, Input } from "react-native-ui-kitten";

import { scaleModerate, scaleVertical } from "../../../../utils/scale";
import { styles } from "./styles";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: { email: "", password: "" }
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.goToPasswordRecover = this.goToPasswordRecover.bind(this);
  }

  renderImage = () => {
    const screenSize = Dimensions.get("window");
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1)
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={require("../../../../assets/images/backgroundLoginV1DarkTheme.png")}
      />
    );
  };

  handleEmailChange(event) {
    const {
      target: { value }
    } = event;
    this.setState({ email: value });

    // todo add email validation
  }

  handlePasswordChange(event) {
    const {
      target: { value }
    } = event;
    this.setState({ password: value });
    // todo change keyboard and add validation
  }

  submitLogin() {
    // todo redux thunk action
  }

  goToPasswordRecover() {
    const { navigation } = this.props;
    navigation.navigate("RecoverPassword");
  }

  goToSignUp() {
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  }

  render() {
    const { email, password } = this.state;

    return (
      <Layout style={styles.screen}>
        {this.renderImage()}
        <Input
          value={email}
          onChange={this.handleEmailChange}
          placeholder="Email"
          size="large"
          style={styles.input}
        />
        <Input
          value={password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
          size="large"
          style={styles.input}
        />

        <Text style={styles.textRow} onPress={this.goToPasswordRecover}>
          I forgot my password
        </Text>

        <Button style={styles.input} onPress={this.submitLogin}>
          Login
        </Button>

        <Text style={styles.textRow}>or</Text>

        <Button style={styles.input} onPress={this.goToSignUp}>
          Sign up
        </Button>
      </Layout>
    );
  }
}
