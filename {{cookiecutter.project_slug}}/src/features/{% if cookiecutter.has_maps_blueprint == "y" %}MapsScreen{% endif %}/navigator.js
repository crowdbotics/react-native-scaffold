import { createStackNavigator } from "react-navigation-stack";

import MapsHome from "./screens/MapsHome";

export const GoogleMapsNavigator = createStackNavigator(
  {
    Maps: { screen: MapsHome }
  },
  {
    initialRouteName: "Maps"
  }
);
