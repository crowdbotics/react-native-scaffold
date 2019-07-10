import { all, takeEvery } from "redux-saga/effects";
import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_PASSORD_RECOVER_REQUEST
} from "./constants";

function* handleLogin() {}

function* handleSignUp() {}

function* handlePasswordRecovery() {}

export default all([
  takeEvery(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  takeEvery(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  takeEvery(EMAIL_AUTH_PASSORD_RECOVER_REQUEST, handlePasswordRecovery)
]);
