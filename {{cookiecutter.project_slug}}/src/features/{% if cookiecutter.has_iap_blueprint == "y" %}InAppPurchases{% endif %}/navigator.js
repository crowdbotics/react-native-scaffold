import { createStackNavigator } from "react-navigation";

import IAPScreen from "./screens/IAPScreen";

export const IAPNavigator = createStackNavigator(
  {
    Home: { screen: IAPScreen }
  },
  {
    initialRouteName: "Home"
  }
);
