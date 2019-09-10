import { createStackNavigator } from "react-navigation-stack";

import MainTutorialScreen from "./screens/MainTutorial";

export default createStackNavigator(
  {
    MainTutorial: { screen: MainTutorialScreen }
  },
  {
    initialRouteName: "MainTutorial"
  }
);