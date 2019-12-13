import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';



{% if cookiecutter.has_tutorial_blueprint == "y" %}import TutorialNavigator from "../features/Tutorial/navigator";{% endif %}




//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },



    {% if cookiecutter.has_tutorial_blueprint == "y" %}
    Tutorial: {
      screen: TutorialNavigator
    },
    {% endif %}


    //@BlueprintNavigationInsertion

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
