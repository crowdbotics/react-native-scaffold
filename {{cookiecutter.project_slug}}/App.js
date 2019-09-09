import React from "react";
import { StyleSheet } from "react-native";
import { mapping, light } from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "react-native-ui-kitten";
import { Provider as ReduxProvider } from "react-redux";

import SplashScreen from "./src/features/SplashScreen";
import { store } from "./src/redux/store";

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
    <ReduxProvider store={store}>
      <ApplicationProvider mapping={mapping} theme={light}>
        <Layout style={[styles.flex]}>
          <SplashScreen />
        </Layout>
      </ApplicationProvider>
    </ReduxProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}

  

export const styles = StyleSheet.create({
  flex: { flex: 1 }
});