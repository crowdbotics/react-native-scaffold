import { createStackNavigator } from "react-navigation";

import MainTutorialScreen from "./screens/MainTutorial";

export default createStackNavigator(
  {
    MainTutorial: { screen: MainTutorialScreen }
  },
  {
    initialRouteName: "MainTutorial",
    headerMode: 'none',
  }
);
