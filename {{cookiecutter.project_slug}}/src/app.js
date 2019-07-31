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
import firebase from "react-native-firebase";
import {checkPermission} from '../src/utils/push'
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

    this.notificationListener();
    this.notificationOpenedListener();
  }

  componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator);

    checkPermission();
    this.createNotificationListeners();
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

  

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        // you can change how to show notification
        this.showAlert(title, body);
      });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        // you can change how to show notification
        this.showAlert(title, body);
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      // you can change how to show notification
      this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

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
