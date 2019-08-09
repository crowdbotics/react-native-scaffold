import { createStackNavigator } from "react-navigation";

import ChatScreen from "./screens/ChatScreen";

export const MessengerNavigator = createStackNavigator(
  {
    Home: { screen: ChatScreen }
  },
  {
    initialRouteName: "Home"
  }
);
