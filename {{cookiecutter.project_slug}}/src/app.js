import React from "react";
import { mapping, dark } from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "react-native-ui-kitten";
import { Provider as ReduxProvider } from "react-redux";

import SplashScreen from "./features/SplashScreen";
import { styles } from "./app.styles";
import { store } from "./redux/store";
import NavigatorProvider from "./navigator/mainNavigator";
import { setupHttpConfig } from "./utils/http";
import { crowdboticsTheme } from "./config/crowdboticsTheme";
import * as NavigationService from "./navigator/NavigationService";

export default class App extends React.Component {
  state = {
    isLoaded: false
  };

  async componentWillMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    await this.loadAssets();
    setupHttpConfig();
  }

  componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator);
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
      <ApplicationProvider mapping={mapping} theme={crowdboticsTheme}>
        <NavigatorProvider
          style={[styles.flex]}
          ref={nav => {
            this.navigator = nav;
          }}
        >
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
