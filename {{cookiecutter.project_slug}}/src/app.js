import React from "react";
import { mapping, light } from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "react-native-ui-kitten";
import SplashScreen from "./features/SplashScreen";
import { styles } from "./app.styles";

export default class App extends React.Component {
  state = {
    isLoaded: false
  };

  componentWillMount() {
    this.loadAssets();
  }

  loadAssets = async () => {
    // add any loading assets here
    this.setState({ isLoaded: true });
  };

  renderLoading = () => (
    <Layout style={[styles.flex]}>
      <Text>Loading</Text>
    </Layout>
  );

  renderApp = () => (
    <ApplicationProvider mapping={mapping} theme={light}>
      <Layout style={[styles.flex]}>
        <SplashScreen />
      </Layout>
    </ApplicationProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}
