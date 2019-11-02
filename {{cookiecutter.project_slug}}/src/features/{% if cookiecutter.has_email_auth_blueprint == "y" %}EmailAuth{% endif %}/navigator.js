import { createStackNavigator } from "react-navigation-stack";

import SignInScreen from "./screens/SignIn";
import RecoverPasswordScreen from "./screens/PasswordRecover";
import SignUpScreen from "./screens/SignUp";
import ProtectedScreen from "./screens/ProtectedScreen";
import ConfirmationRequiredScreen from "./screens/ConfirmationRequired";

export const EmailAuthNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    RecoverPassword: { screen: RecoverPasswordScreen },
    SignUp: { screen: SignUpScreen },
    ProtectedRoute: { screen: ProtectedScreen },
    ConfirmationRequired: { screen: ConfirmationRequiredScreen }
  },
  {
    initialRouteName: "SignIn"
  }
);