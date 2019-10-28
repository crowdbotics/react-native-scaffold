import * as actions from "./constants";

const initialState = {
  user: null,
  accessToken: null,
  errors: { SignIn: null, SignUp: null, PasswordRecover: null }
};

export const EmailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EMAIL_AUTH_LOGIN_SUCCESS:
      return { ...state, accessToken: action.accessToken };
    case actions.EMAIL_AUTH_LOGIN_ERROR:
      return { ...state, errors: { SignIn: action.error } };
    case actions.EMAIL_AUTH_PASSWORD_RECOVER_ERROR:
      return { ...state, errors: { PasswordRecover: action.error } };
    case actions.EMAIL_AUTH_SIGNUP_SUCCESS:
      return { ...state, user: action.user };
    case actions.EMAIL_AUTH_SIGNUP_ERROR:
      return { ...state, errors: { SignUp: action.error } };
    case actions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};