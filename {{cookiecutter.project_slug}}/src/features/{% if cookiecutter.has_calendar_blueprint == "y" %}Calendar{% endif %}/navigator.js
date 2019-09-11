import { createStackNavigator } from "react-navigation-stack";

import CalendarLoginScreen from "./screens/CalendarLogin";
import CalendarViewScreen from "./screens/CalendarView";

export default createStackNavigator(
  {
    CalendarLogin: { screen: CalendarLoginScreen },
    CalendarView: { screen: CalendarViewScreen }
  },
  {
    initialRouteName: "CalendarLogin"
  }
);
