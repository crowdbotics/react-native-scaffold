import { all, takeLatest, put, call } from "redux-saga/effects";
import * as NavigationService from "../../../navigator/NavigationService";

import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_LOGIN_ERROR,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_PASSORD_RECOVER_REQUEST,
  EMAIL_AUTH_LOGIN_SUCCESS,
  EMAIL_AUTH_SIGNUP_ERROR,
  EMAIL_AUTH_SIGNUP_SUCCESS
} from "./constants";
import { request } from "../../../utils/http";

function sendLogin({ email, password }) {
  return request.post("/rest-auth/login/", {
    email,
    password
  });
}

function sendSignUp({ email, password }) {
  return request.post("/rest-auth/registration/", {
    email,
    password
  });
}

function sendPasswordRecovery({ email }) {
  return request.post("/rest-auth/password/reset/", {
    email
  });
}

function* handleLogin(action) {
  const {
    user: { email, password }
  } = action;
  try {
    const { status, data } = yield call(sendLogin, { email, password });

    if (status === 200) {
      yield put({
        type: EMAIL_AUTH_LOGIN_SUCCESS,
        accessToken: data.key
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate("ProtectedRoute");
    } else {
      yield put({
        type: EMAIL_AUTH_LOGIN_ERROR,
        error: "Unknown Error"
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_LOGIN_ERROR,
      error: "Can't sign in with provided credentials"
    });
  }
}

function* handleSignUp(action) {
  const {
    user: { email, password }
  } = action;
  try {
    const { status, data } = yield call(sendSignUp, { email, password });

    if (status === 201) {
      yield put({
        type: EMAIL_AUTH_SIGNUP_SUCCESS,
        user: data.user
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate("ConfirmationRequired");
    } else {
      yield put({
        type: EMAIL_AUTH_SIGNUP_ERROR,
        error: "Unknown Error"
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_SIGNUP_ERROR,
      error: "Can't sign up with provided credentials"
    });
  }
}

function* handlePasswordRecovery() {}

export default all([
  takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(EMAIL_AUTH_PASSORD_RECOVER_REQUEST, handlePasswordRecovery)
]);
