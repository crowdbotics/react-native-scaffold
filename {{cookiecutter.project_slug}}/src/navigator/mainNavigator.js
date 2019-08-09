import React, { Component } from "react";

import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_login_blueprint %}import { EmailAuthNavigator } from "../features/EmailAuth/navigator";{% endif %}

{% if cookiecutter.has_left_navigation_profile_blueprint %}import { LeftNavigation } from "../features/Profile/navigator";{% endif %}

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
    }
    {% endif %}

    {% if cookiecutter.has_left_navigation_profile_blueprint %}
    LeftNav: LeftNavigation
    {% endif %}
    /** new navigators can be added here */
  },
  {
    initialRouteName: "LeftNav",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
