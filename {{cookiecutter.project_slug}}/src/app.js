import React from "react";
import { mapping, light } from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "react-native-ui-kitten";
import { Provider as ReduxProvider } from "react-redux";

import SplashScreen from "./features/SplashScreen";
import { styles } from "./app.styles";
import { store } from "./redux/store";
import NavigatorProvider from "./navigator/mainNavigator";

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
        <NavigatorProvider style={[styles.flex]}>
          <Layout style={[styles.flex]}>
            <SplashScreen />
          </Layout>
        </NavigatorProvider>
      </ApplicationProvider>
    </ReduxProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}
