import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';

{% if cookiecutter.has_maps_blueprint == "y" %}import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";{% endif %}

{% if cookiecutter.has_tutorial_blueprint == "y" %}import TutorialNavigator from "../features/Tutorial/navigator";{% endif %}
{% if cookiecutter.has_messenger_blueprint == "y" %}import { MessengerNavigator } from "../features/Messenger/navigator";{% endif %}
{% if cookiecutter.has_email_auth_blueprint == "y" %}import {EmailAuthNavigator} from '../features/EmailAuth/navigator';{% endif %}


//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    {% if cookiecutter.has_maps_blueprint == "y" %}
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    {% endif %}

    {% if cookiecutter.has_email_auth_blueprint == "y" %}
    EmailAuth: {
      screen: EmailAuthNavigator,
    },
    {% endif %}
    {% if cookiecutter.has_tutorial_blueprint == "y" %}
    Tutorial: {
      screen: TutorialNavigator
    },
    {% endif %}

    {% if cookiecutter.has_messenger_blueprint == "y" %}
    Messenger: {
      screen: MessengerNavigator
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
