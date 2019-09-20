import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_maps_blueprint == "y" %}import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";{% endif %}
{% if cookiecutter.has_calendar_blueprint == "y" %}import CalendarNavigator from "../features/Calendar/navigator";{% endif %}
{% if cookiecutter.has_tutorial_blueprint == "y" %}import TutorialNavigator from "../features/Tutorial/navigator";{% endif %}
{% if cookiecutter.has_messenger_blueprint == "y" %}import { MessengerNavigator } from "../features/Messenger/navigator";{% endif %}
{% if cookiecutter.has_email_auth_blueprint == "y" %}import {EmailAuthNavigator} from '../features/EmailAuth/navigator';{% endif %}
{% if cookiecutter.has_camera_blueprint == "y" %}import { CameraNavigator } from "../features/UserCamera/navigator";{% endif %}

//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    {% if cookiecutter.has_maps_blueprint == "y" %}
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    {% endif %}
    {% if cookiecutter.has_calendar_blueprint == "y" %}
    Calendar: {
      screen: CalendarNavigator
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
    {% if cookiecutter.has_camera_blueprint == "y" %}
    UserCamera: {
      screen: CameraNavigator
    },
    {% endif %}
    {% if cookiecutter.has_messenger_blueprint == "y" %}
    Messenger: {
      screen: MessengerNavigator
    },
    {% endif %}

    //@BlueprintNavigationInsertion

    /** new navigators can be added here */
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none' /** you can play with this */,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
