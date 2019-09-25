import { createStackNavigator } from "react-navigation-stack";

import ChatScreen from "./screens/ChatScreen";

export const MessengerNavigator = createStackNavigator(
  {
    Home: { screen: ChatScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);
