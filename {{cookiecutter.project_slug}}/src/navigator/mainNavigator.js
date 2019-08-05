import React, { Component } from "react";

import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import SplashScreen from "../features/SplashScreen";

{% if cookiecutter.has_login_blueprint %}import { EmailAuthNavigator } from "../features/EmailAuth/navigator";{% endif %}

import DrawerMenu from '../components/DrawerMenu';
import ProfileScreen from "../features/Profile/index";
import { Dimensions } from 'react-native';

const dm = Dimensions.get('screen');

/**
 * new navigators can be imported here
 */

const MainDrawerNavigator = createDrawerNavigator(
  {
    profile: ProfileScreen,
  },
  {
    drawerWidth: dm.width * 0.6,
    // eslint-disable-next-line react/display-name
    contentComponent: (props) => (
      <DrawerMenu currentScreen={props.navigation.state.routeName} {...props} />
    ),
    initialRouteName: 'profile',
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        marginLeft: 0,
        paddingLeft: 0
      }
    }
  }
);

const LeftStackNavigator = createStackNavigator(
  {
    mainroot: MainDrawerNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'mainroot'
  }
);

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

    LeftNav: LeftStackNavigator
    
    /** new navigators can be added here */
  },
  {
    initialRouteName: "LeftNav",
    headerMode: "none" /** you can play with this */
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
