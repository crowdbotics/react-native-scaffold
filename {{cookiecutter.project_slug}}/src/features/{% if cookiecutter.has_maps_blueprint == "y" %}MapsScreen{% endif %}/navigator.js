import { createStackNavigator } from "react-navigation";

import MapsHome from "./screens/MapsHome";
import SearchView from "./screens/SearchView";

export const GoogleMapsNavigator = createStackNavigator(
  {
    Maps: { screen: MapsHome },
    SearchScreen: { screen: SearchView },
  },
  {
    initialRouteName: "Maps"
  }
);
