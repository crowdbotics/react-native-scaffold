import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

import { EmailAuthNavigator } from "../features/EmailAuth/navigator";

import CalendarNavigator from "../features/Calendar/navigator";

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
    ,
    
    Calendar: {
      screen: CalendarNavigator
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
