import { createStackNavigator } from "react-navigation";

import CameraScreen from "./screens/CameraScreen";

export const CameraNavigator = createStackNavigator(
  {
    Camera: { screen: CameraScreen }
  },
  {
    initialRouteName: "Camera"
  }
);
