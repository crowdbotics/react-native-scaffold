import { createStackNavigator } from "react-navigation";

import Home from "./screens/Home";

export const MessengerNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home"
  }
);
