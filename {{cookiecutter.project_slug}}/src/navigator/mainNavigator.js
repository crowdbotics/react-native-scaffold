import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_login_blueprint %}import { EmailAuthNavigator } from "../features/EmailAuth/navigator";{% endif %}
{% if cookiecutter.has_maps_blueprint == "y" %}import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";{% endif %}
{% if cookiecutter.has_calendar_blueprint == "y" %}import CalendarNavigator from "../features/Calendar/navigator";{% endif %}
{% if cookiecutter.has_tutorial_blueprint == "y" %}import TutorialNavigator from "../features/Tutorial/navigator";{% endif %}
{% if cookiecutter.has_camera_blueprint == "y" %}import { CameraNavigator } from "../features/UserCamera/navigator";{% endif %}

import {ProfileV1} from '../screens/social/profile1'

/**
 * new navigators can be imported here
 */

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    {% if cookiecutter.has_login_blueprint %}
    EmailAuth: {
      screen: EmailAuthNavigator
    },
    {% endif %}
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

    ProfileV1: {
      screen: ProfileV1
    }

    /** new navigators can be added here */
  },
  {
    initialRouteName: "ProfileV1",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
