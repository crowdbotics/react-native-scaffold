import React, { Component } from "react";

import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import DrawerMenu from "../../components/DrawerMenu";
import ProfileScreen from "../../features/Profile/screens/Profile/index";
import { Dimensions } from "react-native";
import styles from "./style";

const screenDimensions = Dimensions.get("screen");

const mainDrawerNavigator = createDrawerNavigator(
  {
    profile: ProfileScreen
  },
  {
    drawerWidth: screenDimensions.width * 0.6,
    // eslint-disable-next-line react/display-name
    contentComponent: props => (
      <DrawerMenu currentScreen={props.navigation.state.routeName} {...props} />
    ),
    initialRouteName: "profile",
    contentOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      labelStyle: styles.labelStyle,
    }
  }
);

export const LeftNavigation = createStackNavigator(
  {
    mainroot: mainDrawerNavigator
  },
  {
    headerMode: "none",
    initialRouteName: "mainroot"
  }
);
