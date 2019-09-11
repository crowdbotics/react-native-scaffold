import React from "react";
import { connect } from "react-redux";
import { Layout, Text, Button } from "react-native-ui-kitten";

import { logout } from "../../redux/actions";
import * as NavigationService from "../../../../navigator/NavigationService";

const ProtectedScreen = ({ accessToken, actions }) => {
  return (
    <Layout>
      <Text>Welcome</Text>
      <Text>Your token is {accessToken}</Text>
      <Button onPress={actions.logoutAction}>Sign out</Button>
    </Layout>
  );
};

const mapStateToProps = state => ({ accessToken: state.EmailAuth.accessToken });

const mapDispatchToProps = dispatch => ({
  actions: {
    logoutAction: _ => {
      //this does not need a saga, it is sync action
      dispatch(logout());
      NavigationService.navigateAndResetStack("SplashScreen");
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedScreen);