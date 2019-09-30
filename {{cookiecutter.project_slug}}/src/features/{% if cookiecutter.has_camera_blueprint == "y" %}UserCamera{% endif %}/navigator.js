import { createStackNavigator } from "react-navigation-stack";

import CameraScreen from "./screens/CameraScreen";
import Home from "./screens/";


export const CameraNavigator = createStackNavigator(
  {
    Camera: { screen: CameraScreen },
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
  }
);
