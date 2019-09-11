import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '../features/SplashScreen';
import {EmailAuthNavigator} from '../features/EmailAuth/navigator';
import TutorialNavigator from "../features/Tutorial/navigator";
import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";
import { CameraNavigator } from "../features/UserCamera/navigator";
import CalendarNavigator from "../features/Calendar/navigator";

/**
 * new navigators can be imported here
 */

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    /** new navigators can be added here */
    
    EmailAuth: {
      screen: EmailAuthNavigator,
    },
    
    
    Tutorial: {
      screen: TutorialNavigator
    },
    
    
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    
    
    UserCamera: {
      screen: CameraNavigator
    },
    
    
    Calendar: {
      screen: CalendarNavigator
    },
    
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none' /** you can play with this */,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
