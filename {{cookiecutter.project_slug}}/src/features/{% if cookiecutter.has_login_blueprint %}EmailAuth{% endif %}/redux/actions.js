import * as actions from "./constants";

export const signUp = user => ({
  type: actions.EMAIL_AUTH_SIGNUP_REQUEST,
  user
});

export const signIn = user => ({
  type: actions.EMAIL_AUTH_LOGIN_REQUEST,
  user
});
