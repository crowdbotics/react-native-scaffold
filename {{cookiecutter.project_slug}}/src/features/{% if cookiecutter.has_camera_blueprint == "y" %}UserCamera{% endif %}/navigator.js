import { createStackNavigator } from "react-navigation-stack";

import CameraScreen from "./screens/CameraScreen";

export const CameraNavigator = createStackNavigator(
  {
    Camera: { screen: CameraScreen }
  },
  {
    initialRouteName: "Camera"
  }
);
