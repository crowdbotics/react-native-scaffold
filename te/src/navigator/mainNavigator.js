import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

import { EmailAuthNavigator } from "../features/EmailAuth/navigator";

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
    }
    
    /** new navigators can be added here */
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
