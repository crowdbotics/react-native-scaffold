import { createStackNavigator } from "react-navigation";
import SignInScreen from "./screens/SignIn";
import RecoverPasswordScreen from "./screens/PasswordRecover";
import SignUpScreen from "./screens/SignUp";

export const EmailAuthNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    RecoverPassword: { screen: RecoverPasswordScreen },
    SignUp: { screen: SignUpScreen }
  }

  // { headerMode: "none" }
);
