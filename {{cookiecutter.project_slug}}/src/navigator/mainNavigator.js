import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_login_blueprint %}import { EmailAuthNavigator } from "../features/EmailAuth/navigator";{% endif %}
{% if cookiecutter.has_maps_blueprint == "True" %}import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";{% endif %}
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
    {% if cookiecutter.has_maps_blueprint == "True" %}
    MapsScreen: {
      screen: GoogleMapsNavigator
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
