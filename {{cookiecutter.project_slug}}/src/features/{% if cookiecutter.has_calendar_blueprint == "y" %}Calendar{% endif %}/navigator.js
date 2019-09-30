import { createStackNavigator } from "react-navigation-stack";

import CalendarLoginScreen from "./screens/CalendarLogin";
import CalendarViewScreen from "./screens/CalendarView";
import Home from "./screens/";


export default createStackNavigator(
  {
    CalendarLogin: { screen: CalendarLoginScreen },
    CalendarView: { screen: CalendarViewScreen },
    Home: { screen: Home },
    
  },
  {
    initialRouteName: "Home",
  }
);
