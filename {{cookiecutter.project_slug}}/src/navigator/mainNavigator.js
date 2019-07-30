import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_login_blueprint %}import { EmailAuthNavigator } from "../features/EmailAuth/navigator";{% endif %}
{% if cookiecutter.has_maps_blueprint == "y" %}import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";{% endif %}
{% if cookiecutter.has_camera_blueprint == "y" %}import { CameraNavigator } from "../features/UserCamera/navigator";{% endif %}
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
    {% if cookiecutter.has_camera_blueprint == "y" %}
    CameraScreen: {
      screen: CameraNavigator
    },
    {% endif %}
    /** new navigators can be added here */
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
