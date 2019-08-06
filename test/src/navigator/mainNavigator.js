import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

import { EmailAuthNavigator } from "../features/EmailAuth/navigator";
import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";
import CalendarNavigator from "../features/Calendar/navigator";
import TutorialNavigator from "../features/Tutorial/navigator";
import { CameraNavigator } from "../features/UserCamera/navigator";
import { MessengerNavigator } from "../features/UserCamera/navigator";

/**
 * new navigators can be imported here
 */

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },

    EmailAuth: {
      screen: EmailAuthNavigator
    },


    MapsScreen: {
      screen: GoogleMapsNavigator
    },


    Calendar: {
      screen: CalendarNavigator
    },


    Tutorial: {
      screen: TutorialNavigator
    },


    UserCamera: {
      screen: CameraNavigator
    },

    Messenger: {
      screen: MessengerNavigator
    },

    /** new navigators can be added here */
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
